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

/* Instantiate Libauth crypto interfaces. */
const ripemd160 = await instantiateRipemd160()
const secp256k1 = await instantiateSecp256k1()
const sha256 = await instantiateSha256()

/* Initialize databases. */
const groupsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/transactions_group`)

const run = async () => {
    let coins
    let nexaAddress
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
        return _script?.hex.slice(-6) === 'c71340' && _script?.group === 'nexa:tptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x'
    })
    return console.log('QUALIFIED', qualified, qualified.length)

    for (let i = 0; outputs.length; i++) {
        output = outputs[i]

        console.error('OUTPUT', output)
        console.error('OUTPUT', output.scriptPubKey?.hex.slice(-6))

        break
    }

return




    /* Encode Private Key WIF. */
    wif = encodePrivateKeyWif(sha256, hexToBin(PRIVATE_KEY), 'mainnet')
    // console.log('WALLET IMPORT FORMAT', wif)

    /* Derive the corresponding public key. */
    publicKey = secp256k1.derivePublicKeyCompressed(hexToBin(PRIVATE_KEY))
    // console.log('PUBLIC KEY (hex)', binToHex(publicKey))

    /* Hash the public key hash according to the P2PKH/P2PKT scheme. */
    scriptData = encodeDataPush(publicKey)
    // console.log('\n  Script Data:', scriptData)

    publicKeyHash = ripemd160.hash(sha256.hash(scriptData))
    // console.log('PUBLIC KEY HASH (hex)', binToHex(publicKeyHash))

    scriptPubKey = new Uint8Array([
        OP.ZERO,
        OP.ONE,
        ...encodeDataPush(publicKeyHash),
    ])
    console.info('\n  Script Public Key:', binToHex(scriptPubKey))

    /* Encode the public key hash into a P2PKH nexa address. */
    nexaAddress = encodeAddress(
        'nexa',
        'TEMPLATE',
        encodeDataPush(scriptPubKey),
    )
    console.info('\n  Nexa address:', nexaAddress)

    coins = await getCoins(wif)
        .catch(err => console.error(err))
    console.log('\n  Coins:', coins)

    userData = [
        'NexaJS\tUnitTest',
        uuidv4(),
    ]

    /* Initialize hex data. */
    nullData = encodeNullData(userData)
    // console.log('HEX DATA', nullData)

    receivers = [
        {
            data: nullData,
        },
        {
            address: NEXA_RECEIVING_ADDRESS,
            satoshis: SATOSHIS,
        },
    ]

    userData = [
        'NexaJS\tUnitTest',
        uuidv4(),
    ]

    /* Initialize hex data. */
    nullData = encodeNullData(userData)
    // console.log('HEX DATA', nullData)

    /* Add a 2nd data push. */
    receivers.push({
        data: nullData,
    })

    // FIXME: FOR DEV PURPOSES ONLY
    receivers.push({
        address: nexaAddress,
    })
    console.log('\n  Receivers:', receivers)

    /* Send UTXO request. */
    response = await sendCoin(coins, receivers)
    console.log('Send UTXO (response):', response)

    try {
        txResult = JSON.parse(response)
        console.log('TX RESULT', txResult)
    } catch (err) {
        console.error(err)
    }
}

run()
