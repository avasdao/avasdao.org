/* Import modules. */
import moment from 'moment'
import PouchDB from 'pouchdb'

import { encodePrivateKeyWif } from '@nexajs/hdnode'
import {
    getCoins,
    sendCoins,
} from '@nexajs/purse'
import { encodeNullData } from '@nexajs/script'
import { sleep } from '@nexajs/utils'
import { Wallet } from '@nexajs/wallet'

/* Import (local) modules. */
import sendMail from './sendMail.js'

/* Initialize databases. */
const payoutsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/payouts`)

/* Set constants. */
const TX_GROUP_LIMIT = 250
const TX_INTERVAL_DELAY = 5000 // 5 seconds delay

/**
 * Send Payyyouts
 *
 * Performs on-chain transactions to ALL Payyyouts recepients.
 */
export default async () => {
    /* Initialize locals. */
    let coins
    let messageid
    let nullData
    let output
    let outputs
    let payoutGroupIdx
    let payoutGroups
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
    let wallet
    let wif

/* Set today's date. */
// FIXME: Pull the NEXT date from database.
payoutsDate = '20240920'//moment().format('YYYYMMDD')
console.log(`\n  Today's Date`, payoutsDate)

    /* Request current Payout data. */
    response = await payoutsDb
        .get(payoutsDate, {
            include_docs: true,
        })
        .catch(err => console.error(err))
    console.log('\n  # RECEIVERS', response.receivers.length);

    /* Validate Payout data response. */
    if (!response) {
        throw new Error('Missing Payout data!')
    }

    /* Initialize Payout wallet. */
    wallet = new Wallet(process.env.MNEMONIC)
    console.info('\n  Nexa address:', wallet.address)

    sleep(5000)

    /* Encode Private Key WIF. */
    wif = encodePrivateKeyWif(wallet.privateKey, 'mainnet')

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
    console.log('\n  # PAYOUT GROUPS', payoutGroups.length);

    for (let i = 0; i < payoutGroups.length; i++) {
        coins = await getCoins(wif)
            .catch(err => console.error(err))
        console.log('\n  COINS', coins)

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
// await sleep(TX_INTERVAL_DELAY)
// continue

        /* Send UTXO request. */
        txResult = await sendCoins(coins, receivers)
        console.log('\nTX RESULT', response)

        /* Set mail body. */
        const mailBody = `
Payyyouts Daemon is running for [ ${payoutsDate} ]
Run at: ${moment().format('llll')}

https://nexa.sh/tx/${txResult?.result}

---

${txResult}

---
        `

        /* Send mail. */
        messageid = await sendMail(mailBody, null)
        console.log('MESSAGE ID', messageid)

// TODO Update database logs

        /* Transaction interval delay. */
        await sleep(TX_INTERVAL_DELAY)
    }
}
