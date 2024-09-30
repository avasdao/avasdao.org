/* Import modules. */
import moment from 'moment'
import numeral from 'numeral'
import PouchDB from 'pouchdb'

import { hexToBin } from '@nexajs/utils'

/* Import (local) modules. */
import getAddress from './getAddress.js'
import getAddressBalance from './getAddressBalance.js'
import sendMail from './sendMail.js'

/* Initialize databases. */
const payoutsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/payouts`)

/* Set constants. */
const BASE_PAYOUT_ADDRESS = 'nexa:nqtsq5g5sp33aj07d808w8xvv7kuarwcrv3z2fvskw2ej7dj'
const BASE_PAYOUT_SATOSHIS = 100000000n
const DUST_LIMIT = 546n
const ENDPOINT = 'https://nexa.sh/graphql'
const QUALIFIED_LOCKTIME = 'c71340' // 30 days
const QUALIFIED_SCRIPT_HASH = '103012fb192c7dc29fab0bf1126dfca42106a574' // Stakehouse template ID
const QUALIFIED_TOKENID = 'nexa:tptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x' // $AVAS

/**
 * Setup Payyyouts
 *
 * Primary setup for the Payyyouts.
 */
export default async () => {
    /* Initialize locals. */
    let balance
    let coins
    let collated
    let messageid
    let nullData
    let output
    let outputs
    let overage
    let pkg
    let payoutsDate
    let publicKey
    let publicKeyHash
    let qualified
    let receivers
    let response
    let scriptData
    let scriptPubKey
    let scripts
    let txResult
    let txs
    let userData
    let wif

/* Set today's date. */
// FIXME: Pull the NEXT date from database.
payoutsDate = '20240923'//moment().format('YYYYMMDD')
console.log(`\nToday's Date`, payoutsDate)

    /* Request current Payout data. */
    response = await payoutsDb
        .get(payoutsDate, {
            include_docs: true,
        }).catch(err => console.error(err))

    /* Validate Payout data response. */
    if (response) {
        console.error(response)

        messageid = await sendMail(`ERROR! Already processed payout data for [ ${payoutsDate} ]`, null)
        console.log('ERROR MAIL SENT', messageid)

        throw new Error('Already processed payout data for today!')
    }

    /* Set group payout data. */
    const query = `
    {
      script(first: 10000) {
        edges {
          node {
            txidem
            vout {
              scriptPubKey {
                hex
                type
                scriptHash
                argsHash
                group
                groupQuantity
              }
            }
          }
        }
      }
    }
    `

    /* Make query request. */
    response = await fetch(ENDPOINT,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query }),
        }).catch(err => console.error(err))

    /* Decode response. */
    response = await response.json()
// console.log('RESPONSE (edges):', response.data.script.edges)

    /* Handle outputs. */
    outputs = response.data.script.edges.map(_edge => {
        return _edge.node.vout
    })
    // return console.log('OUTPUTS', outputs);

    // TODO RUN QUERY BY (SCRIPTHASH + GROUPID)

    /* Initialize scripts. */
    scripts = []

    /* Handle scripts. */
    for (let i = 0; i < outputs.length; i++) {
        output = outputs[i]

        for (let j = 0; j < output.length; j++) {
            scripts.push(output[j].scriptPubKey)
        }
    }
// console.error('SCRIPTS', scripts, scripts.length)

    qualified = scripts.filter(_script => {
        return (_script?.scriptHash?.toLowerCase() === QUALIFIED_SCRIPT_HASH) &&
            (_script?.hex.slice(-6) === QUALIFIED_LOCKTIME) &&
            (_script?.group === QUALIFIED_TOKENID)
    })
// console.log('QUALIFIED', qualified, qualified.length)

    /* Calculate total (rewards) share. */
    const totalShare = qualified.reduce(
        (total, _qualified) => (total + BigInt(_qualified.groupQuantity)), BigInt(0)
    )

    /* Handle receivers. */
    receivers = qualified.map(_qualified => {
        const argsHash = _qualified.argsHash
        const address = getAddress(hexToBin(_qualified.argsHash))
        const groupQuantity = _qualified.groupQuantity
        const pct = (_qualified.groupQuantity / Number(totalShare))
        const pctBI = BigInt(parseInt(pct * 1e8))
        const satoshis = (BASE_PAYOUT_SATOSHIS * pctBI) / BigInt(1e8)

        /* Return (receiver) package. */
        return {
            argsHash,
            address,
            groupQuantity,
            totalShare: totalShare.toString(),
            pct: (pct * 100), // for display purposes
            satoshis: satoshis.toString(),
        }
    })
// console.log('RECEIVERS', receivers, receivers.length)

    /* Initialize collation. */
    collated = {}

    /* Handle collation. */
    // NOTE: Group addresses into "total" amount to send.
    receivers.forEach(_receiver => {
        if (!collated[_receiver.address]) {
            collated[_receiver.address] = BigInt(_receiver.satoshis)
        } else {
            collated[_receiver.address] = BigInt(_receiver.satoshis) + collated[_receiver.address]
        }
    })

    /* Reset receivers. */
    receivers = []

    /* Initialize overage. */
    overage = BigInt(0)

    /* Handle (collated) receivers. */
    Object.keys(collated).forEach(_address => {
        /* Set constants. */
        const pct = 0.08 // MAX (reward) percentage
        const pctBI = BigInt(parseInt(pct * 1e8))
        const satoshis = (BASE_PAYOUT_SATOSHIS * pctBI) / BigInt(1e8)

        /* Validate overage. */
        if (collated[_address] > satoshis) {
            /* Add NEW overage. */
            overage += (collated[_address] - satoshis)

            /* Add receiver. */
            receivers.push({
                address: _address,
                satoshis,
            })
        } else {
            /* Add receiver. */
            receivers.push({
                address: _address,
                satoshis: collated[_address],
            })
        }
    })

    console.log('TOTAL RECEIVERS', BigInt(receivers.length))

    console.log('OVERAGE', overage)

    let overageShare = overage / BigInt(receivers.length)
    console.log('OVERAGE SHARE', overageShare)

    /* Add an equal share of overages to ALL receivers. */
    receivers.forEach(_receiver => {
        _receiver.satoshis += overageShare
    })

    /* Filter out receivers with dust. */
    // NOTE: This could be a very large number, so we don't necessarily want to
    //       keep track of NULLs.
    receivers = receivers.filter(_receiver => {
        return _receiver.satoshis > BigInt(DUST_LIMIT)
    })
    console.log('# FINAL RECEIVERS', receivers.length)

    /* Transform (BigInt) data. */
    // NOTE: Map to String from BigInt for JSON support.
    receivers = receivers.map(_receiver => {
        return {
            ..._receiver,
            satoshis: _receiver.satoshis.toString(),
        }
    })
    console.log('FINAL RECEIVERS', JSON.stringify(receivers, null, 2), receivers.length, 'of', qualified.length)

    /* Build DB package. */
    pkg = {
        _id: payoutsDate,
        receivers,
        createdAt: moment().unix(),
    }

    /* Request address balance. */
    balance = await getAddressBalance(BASE_PAYOUT_ADDRESS)
        .catch(err => console.error(err))
    // console.log('BALANCE', balance)

    /* Set mail body. */
    const mailBody = `
Payyyouts Daemon is running for
[ ${payoutsDate} ]

Started at: ${moment().format('llll')}

# Receivers: ${receivers.length}

Balance (confirmed): ${numeral(balance?.confirmed / 100.0).format('0,0.00')}
Balance (unconfirmed): ${numeral(balance?.unconfirmed / 100.0).format('0,0.00')}
    `

    /* Send mail. */
    messageid = await sendMail(mailBody, null)
    console.log('SENDMAIL (id)', messageid)

    /* Validate message id. */
    if (messageid) {
        /* Update DB data. */
        response = await payoutsDb
            .put(pkg)
            .catch(err => console.error(err))
        console.log('RESPONSE (payoutsDb)', response)
    }
}
