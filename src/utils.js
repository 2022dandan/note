
export const request = (url, method, body) => {
    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        mode: 'cors'
    })
    .then(res => res.json())
    .catch(e => {
        console.log('error', e)
        return e
    })
}

