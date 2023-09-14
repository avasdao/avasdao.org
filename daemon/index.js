import moment from 'moment'
import PouchDB from 'pouchdb'
import { v4 as uuidv4 } from 'uuid'

import { encodeAddress } from '@nexajs/address'

import {
    encodePrivateKeyWif,
    parseWif,
} from '@nexajs/hdnode'

import { broadcast } from '@nexajs/provider'

import {
    encodeNullData,
    OP,
} from '@nexajs/script'

import {
    binToHex,
    hexToBin,
} from '@nexajs/utils'

import { Wallet } from '@nexajs/wallet'

/* Libauth helpers. */
import {
    encodeDataPush,
    instantiateRipemd160,
    instantiateSecp256k1,
    instantiateSha256,
} from '@bitauth/libauth'

/* Import class. */
import { Purse } from '@nexajs/purse'

/* Import library modules. */
import {
    getCoins,
    sendCoin,
} from '@nexajs/purse'

/* Set (test) constants. */
const PRIVATE_KEY = 'baa017c1c3458fc80c31c7b5a2ce833a3af44d3c172bff3981103d272f9a5a3c' // nexa:nqtsq5g5sjkqk7wzd9wwh9423rr0tda7m027ryljkfy84cjz
const PRIVATE_KEY_1 = 'ab93ef31c3de84f33d6a7c96a85b13f5653e93e014d5eba30f2a2353dc2b8af7' // nexa:nqtsq5g5sjkqk7wzd9wwh9423rr0tda7m027ryljkfy84cjz
const PRIVATE_KEY_2 = 'f6bbef4f472ee95ec56576e84cfb640eb5e086f67c0bda5463f3e9ccc84b5f32' // nexa:nqtsq5g5sjkqk7wzd9wwh9423rr0tda7m027ryljkfy84cjz
const PRIVATE_KEY_3 = '238990ddf6e84495abf641db1034ed429c3ddfd7808e8bf0900a4ac50fa00323' // nexa:nqtsq5g5sjkqk7wzd9wwh9423rr0tda7m027ryljkfy84cjz
const NEXA_RECEIVING_ADDRESS = 'nexa:nqtsq5g57qupnngwws0rlvsevggu6zxqc0tmk7d3v5ulpfh6'
const SATOSHIS = 1337n
const BASE_PAYOUT_SATOSHIS = 100000000n
const DUST_LIMIT = 546n

/* Instantiate Libauth crypto interfaces. */
const ripemd160 = await instantiateRipemd160()
const secp256k1 = await instantiateSecp256k1()
const sha256 = await instantiateSha256()

/* Initialize databases. */
const groupsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/transactions_group`)
const payoutsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/payouts`)

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

const run = async () => {
    let coins
    let collated
    let nullData
    let output
    let outputs
    let overage
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

    response = await groupsDb
        .query('api/byScriptHash', {
            include_docs: true,
        })
        .catch(err => console.error(err))
    // console.error('RESPONSE', response)

    // txs = response.rows.map(_tx => {
    //     return _tx.doc
    // })
    // console.error('TXS', txs)

    outputs = []

    for (let i = 0; i < response.rows.length; i++) {
        const row = response.rows[i]

        for (let j = 0; j < row.doc.vout.length; j++) {
            const vout = row.doc.vout[j]

            outputs.push(vout)
        }
    }
    // return console.error('OUTPUTS', outputs)

    scripts = []

    for (let i = 0; i < outputs.length; i++) {
        output = outputs[i]

        scripts.push(output.scriptPubKey)
    }

    qualified = scripts.filter(_script => {
        return _script?.scriptHash === '103012FB192C7DC29FAB0BF1126DFCA42106A574' && _script?.hex.slice(-6) === 'c71340' && _script?.group === 'nexa:tptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x'
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
    // console.log('RECEIVERS-1', receivers, receivers.length)

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
}

const run2 = async () => {
    let coins
    let nullData
    let output
    let outputs
    let publicKey
    let publicKeyHash
    let qualified
    let receivers
    let response
    let scriptData
    let scriptPubKey
    let scripts
    let todaysData
    let txResult
    let txs
    let userData
    let wallet
    let wif

    todaysData = moment().format('YYYYMMDD')
    console.log('todaysData' ,todaysData);

    /* Request current Payout data. */
    response = await payoutsDb
        .get(todaysData, {
            include_docs: true,
        })
        .catch(err => console.error(err))

    /* Validate Payout data response. */
    if (!response) {
        throw new Error('Missing Payout data!')
    }

    /* Initialize Payout wallet. */
    wallet = new Wallet(process.env.MNEMONIC)
    console.info('\n  Nexa address:', wallet.address)

    /* Encode Private Key WIF. */
    wif = encodePrivateKeyWif(sha256, wallet.privateKey, 'mainnet')

    /* Derive the corresponding public key. */
    publicKey = secp256k1.derivePublicKeyCompressed(wallet.privateKey)

    /* Hash the public key hash according to the P2PKH/P2PKT scheme. */
    scriptData = encodeDataPush(publicKey)

    publicKeyHash = ripemd160.hash(sha256.hash(scriptData))

    scriptPubKey = new Uint8Array([
        OP.ZERO,
        OP.ONE,
        ...encodeDataPush(publicKeyHash),
    ])


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

    response.receivers.forEach(_receiver => {
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
return

    /* Send UTXO request. */
    response = await sendCoin(coins, receivers)
    console.log('\nSend UTXO (response):', response)

    try {
        txResult = JSON.parse(response)
        console.log('\nTX RESULT', txResult)

        // TODO Update database logs
    } catch (err) {
        console.error(err)
    }
}

run2()
