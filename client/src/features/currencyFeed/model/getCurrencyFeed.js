export const getCurrencyFeed = async (type, from, to, rate, change) => {
    const response = await fetch('http://localhost:3000/currency-feed', {
        method: 'Websocket',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ type, from, to, rate, change })
    })

    if (!response.ok) {
        throw new Error(`Ошибка перевода: ${response.statusText}`)
    }

    const data = await response.json()

    return data
}
