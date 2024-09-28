/* Import modules. */
import { encodeAddress } from '@nexajs/address'
import {
    encodeDataPush,
    OP,
} from '@nexajs/script'

/**
 * Get Address
 *
 * Retrieve an address from its script public key.
 */
export default (_scriptPubkey) => {
    /* Initialize locals. */
    let address
    let scriptPubkey

    /* Set script pubkey. */
    scriptPubkey = new Uint8Array([
        OP.ZERO,
        OP.ONE,
        ...encodeDataPush(_scriptPubkey),
    ])

    /* Encode the public key hash into a P2PKH nexa address. */
    address = encodeAddress(
        'nexa',
        'TEMPLATE',
        encodeDataPush(scriptPubkey),
    )

    /* Return address. */
    return address
}
