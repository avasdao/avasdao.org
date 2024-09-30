/* Set (REST) API endpoints. */
const ROSTRUM_ENDPOINT = 'https://nexa.sh/v1/rostrum'

/* Set (request) method. */
const method = 'POST'

/* Set (request) headers. */
const headers = new Headers()
headers.append('Content-Type', 'application/json')

export default async (_address) => {
    /* Initialize locals. */
    let body
    let response

    /* Set body. */
    body = JSON.stringify({
        request: 'blockchain.address.get_balance',
        params: _address,
    })

    /* Request remote data. */
    response = await fetch(ROSTRUM_ENDPOINT, {
        method,
        headers,
        body,
    }).catch(err => console.error(err))

    /* Decode response. */
    response = await response.json()

    /* Return response. */
    return response
}
