/* Import modules. */
import moment from 'moment'
import numeral from 'numeral'
import fetch from 'node-fetch'
import nodemailer from 'nodemailer'
import PouchDB from 'pouchdb'
import { v4 as uuidv4 } from 'uuid'

import { encodeAddress } from '@nexajs/address'

import {
    encodePrivateKeyWif,
    parseWif,
} from '@nexajs/hdnode'

/* Libauth helpers. */
import {
    encodeDataPush,
    instantiateRipemd160,
    instantiateSecp256k1,
    instantiateSha256,
} from '@bitauth/libauth'

import { broadcast } from '@nexajs/provider'

/* Import class. */
// import { Purse } from '@nexajs/purse'

/* Import library modules. */
import {
    getCoins,
    sendCoin,
} from '@nexajs/purse'

import { getAddressBalance } from '@nexajs/rostrum'

import {
    encodeNullData,
    OP,
} from '@nexajs/script'

import {
    binToHex,
    hexToBin,
} from '@nexajs/utils'

import { Wallet } from '@nexajs/wallet'

/* Set constants. */
const BASE_PAYOUT_ADDRESS = 'nexa:nqtsq5g5sp33aj07d808w8xvv7kuarwcrv3z2fvskw2ej7dj'
const BASE_PAYOUT_SATOSHIS = 100000000n
const DUST_LIMIT = 546n
const TX_GROUP_LIMIT = 250
const TRANSACTION_INTERVAL_DELAY = 5000 // 5 seconds delay

/* Instantiate Libauth crypto interfaces. */
const ripemd160 = await instantiateRipemd160()
const secp256k1 = await instantiateSecp256k1()
const sha256 = await instantiateSha256()

/* Initialize databases. */
const payoutsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/payouts`)

const sleep = ms => new Promise(r => setTimeout(r, ms))

/* Initialize transporter. */
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.forwardemail.net',
    port: process.env.SMTP_PORT || 465, // SSL is recommeded over TLS/STARTTLS
    secure: true,
    auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
    },
})

/**
 * Get Address
 *
 * Retrieve an address from its script public key.
 */
const getAddress = (_scriptPubKey) => {
    let nexaAddress
    let scriptPubKey

    scriptPubKey = new Uint8Array([
        OP.ZERO,
        OP.ONE,
        ...encodeDataPush(_scriptPubKey),
    ])
    // console.info('\n  Script Public Key:', binToHex(scriptPubKey))

    /* Encode the public key hash into a P2PKH nexa address. */
    nexaAddress = encodeAddress(
        'nexa',
        'TEMPLATE',
        encodeDataPush(scriptPubKey),
    )
    // console.info('\n  Nexa address:', nexaAddress)

    return nexaAddress
}

/**
 * Send Mail
 *
 * Sends an email in both (text and HTML) formats.
 */
const sendMail = async (_text, _html) => {
    /* Send mail. */
    const info = await transporter.sendMail({
        from: `"Ava Support" <support@avasdao.org>`, // sender address
        to: `info@hos.im, shomari@avasdao.org`,
        subject: `Ava Daemon Notification`, // Subject line
        text: _text,
        html: _html,
    })
    console.log('MESSAGE INFO', info)

    /* Return message id. */
    return info.messageId
}

/**
 * Setup
 *
 * Primary setup for the Payouts.
 */
const setup = async () => {
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
    let publicKey
    let publicKeyHash
    let qualified
    let receivers
    let response
    let scriptData
    let scriptPubKey
    let scripts
    let todaysDate
    let txResult
    let txs
    let userData
    let wif

    /* Set today's date. */
    todaysDate = moment().format('YYYYMMDD')
    console.log(`\nToday'sData`, todaysDate)

    /* Request current Payout data. */
    response = await payoutsDb
        .get(todaysDate, {
            include_docs: true,
        })
        .catch(err => console.error(err))

    /* Validate Payout data response. */
    if (response) {
        console.error(response)

        messageid = await sendMail(`ERROR! Already processed payout data for [ ${todaysDate} ]`, null)
        console.log('ERROR MAIL SENT', messageid)

        throw new Error('Already processed payout data for today!')
    }

    /* Set Nexa GraphQL endpoint. */
    const ENDPOINT = 'https://nexa.sh/graphql'

    const query = `
    {
      script(first: 1000) {
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
        })
        .catch(err => console.error(err))

    /* Parse JSON. */
    response = await response.json()
    // return console.log('RESPONSE (edges):', response.data.script.edges)

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
    // return console.error('SCRIPTS', scripts, scripts.length)

    qualified = scripts.filter(_script => {
        return (_script?.scriptHash?.toLowerCase() === '103012fb192c7dc29fab0bf1126dfca42106a574') &&
            (_script?.hex.slice(-6) === 'c71340') &&
            (_script?.group === 'nexa:tptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x')
    })
    // return console.log('QUALIFIED', qualified, qualified.length)

    const totalShare = qualified.reduce(
        (total, _qualified) => (total + BigInt(_qualified.groupQuantity)), BigInt(0)
    )

    receivers = qualified.map(_qualified => {
        const argsHash = _qualified.argsHash
        const address = getAddress(hexToBin(_qualified.argsHash))
        const groupQuantity = _qualified.groupQuantity
        const pct = (_qualified.groupQuantity / Number(totalShare))
        const pctBI = BigInt(parseInt(pct * 1e8))
        const satoshis = (BASE_PAYOUT_SATOSHIS * pctBI) / BigInt(1e8)

        return {
            argsHash,
            address,
            groupQuantity,
            totalShare: totalShare.toString(),
            pct: (pct * 100), // for display purposes
            satoshis: satoshis.toString(),
        }
    })
    // return console.log('RECEIVERS-1', receivers, receivers.length)

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

    overage = BigInt(0)

    Object.keys(collated).forEach(_address => {
        const pct = 0.08
        const pctBI = BigInt(parseInt(pct * 1e8))
        const satoshis = (BASE_PAYOUT_SATOSHIS * pctBI) / BigInt(1e8)

        if (collated[_address] > satoshis) {
            overage += (collated[_address] - satoshis)

            receivers.push({
                address: _address,
                satoshis,
            })
        } else {
            receivers.push({
                address: _address,
                satoshis: collated[_address],
            })
        }
    })

    console.log('TOTAL RECEIVERS-1', BigInt(receivers.length));

    console.log('OVERAGE', overage);

    let overageShare = overage / BigInt(receivers.length)
    console.log('OVERAGE SHARE', overageShare);

    // TODO ADD OVERAGES TO ALL ADDRESSES
    receivers.forEach(_receiver => {
        _receiver.satoshis += overageShare
    })

    /* Filter out receivers with dust. */
    // NOTE: This could be a very large number, so we don't necessarily want to
    //       keep track of NULLs.
    receivers = receivers.filter(_receiver => {
        return _receiver.satoshis > BigInt(DUST_LIMIT)
    })

    console.log('TOTAL RECEIVERS-2', BigInt(receivers.length));

    // NOTE: Map to String from BigInt for JSON support.
    receivers = receivers.map(_receiver => {
        return {
            ..._receiver,
            satoshis: _receiver.satoshis.toString(),
        }
    })

    console.log('RECEIVERS', JSON.stringify(receivers, null, 2), receivers.length, 'of', qualified.length)

    pkg = {
        _id: todaysDate,
        receivers,
        createdAt: moment().unix(),
    }

    balance = await getAddressBalance(BASE_PAYOUT_ADDRESS)
        .catch(err => console.error(err))
    // console.log('BALANCE', balance)

    /* Set mail body. */
    const mailBody = `
Payyyouts Daemon is running for
[ ${todaysDate} ]

Started at: ${moment().format('llll')}

# Receivers: ${receivers.length}

Balance (confirmed): ${numeral(balance?.confirmed / 100.0).format('0,0.00')}
Balance (unconfirmed): ${balance?.unconfirmed}
    `

    /* Send mail. */
    messageid = await sendMail(mailBody, null)
    console.log('MESSAGE ID', messageid)

    /* Validate message id. */
    if (messageid) {
        /* Request current Payout data. */
        response = await payoutsDb
            .put(pkg)
            .catch(err => console.error(err))
        console.log('RESPONSE', response)
    }
}

const basePayout = async () => {
    /* Initialize locals. */
    let coins
    let messageid
    let nullData
    let output
    let outputs
    let payoutGroupIdx
    let payoutGroups
    let publicKey
    let publicKeyHash
    let qualified
    let receivers
    let response
    let scriptData
    let scriptPubKey
    let scripts
    let todaysDate
    let txResult
    let txs
    let userData
    let wallet
    let wif

    /* Set today's date. */
    todaysDate = moment().format('YYYYMMDD')
    console.log(`\nToday'sData`, todaysDate)

    /* Request current Payout data. */
    response = await payoutsDb
        .get(todaysDate, {
            include_docs: true,
        })
        .catch(err => console.error(err))
    console.log('# RECEIVERS', response.receivers.length);

    /* Validate Payout data response. */
    if (!response) {
        throw new Error('Missing Payout data!')
    }

    /* Initialize Payout wallet. */
    wallet = new Wallet(process.env.MNEMONIC)
    console.info('\n  Nexa address:', wallet.address)

    /* Encode Private Key WIF. */
    wif = encodePrivateKeyWif(sha256, wallet.privateKey, 'mainnet')

    /* Initialize transaction groups. */
    payoutGroups = []

    /* Split transaction(s) into group(s). */
    for (let i = 0; i < response.receivers.length; i++) {
        payoutGroupIdx = Math.floor(i / TX_GROUP_LIMIT)
        // console.log('GROUP INDEX', payoutGroupIdx);

        if (!payoutGroups[payoutGroupIdx]) {
            payoutGroups[payoutGroupIdx] = []
        }

        payoutGroups[payoutGroupIdx].push(response.receivers[i])
    }
    console.log('# PAYOUT GROUPS', payoutGroups.length);

    for (let i = 0; i < payoutGroups.length; i++) {
        coins = await getCoins(wif)
            .catch(err => console.error(err))
        console.log('\n  Coins:', coins)

        userData = [
            'AVAS.cash',
            'Payyyouts! Payyyouts! Payyyouts!',
        ]

        /* Initialize hex data. */
        nullData = encodeNullData(userData)

        receivers = [
            {
                data: nullData,
            },
        ]

        // response.receivers.forEach(_receiver => {
        payoutGroups[i].forEach(_receiver => {
            receivers.push({
                address: _receiver.address,
                satoshis: BigInt(_receiver.satoshis),
            })
        })

        // FIXME: FOR DEV PURPOSES ONLY
        receivers.push({
            address: wallet.address,
        })
        console.log('\nRECEIVERS:', receivers, receivers.length)
// await sleep(TRANSACTION_INTERVAL_DELAY)
// continue

        /* Send UTXO request. */
        response = await sendCoin(coins, receivers)
        console.log('\nSend UTXO (response):', response)

        try {
            txResult = JSON.parse(response)
            console.log('\nTX RESULT', txResult)

            /* Set mail body. */
            const mailBody = `
Payyyouts Daemon is running for [ ${todaysDate} ]
Run at: ${moment().format('llll')}

https://nexa.sh/tx/${txResult?.result}

---

${response}

---
            `

            /* Send mail. */
            messageid = await sendMail(mailBody, null)
            console.log('MESSAGE ID', messageid)

            // TODO Update database logs
        } catch (err) {
            console.error(err)
        }


        /* Transaction interval delay. */
        await sleep(TRANSACTION_INTERVAL_DELAY)
    }
}

/* Validate CLI arguments. */
// TODO Split into "Base" and "Stream" payouts.
if (process.argv[2] === 'live') {
    basePayout()
} else {
    setup()
}
