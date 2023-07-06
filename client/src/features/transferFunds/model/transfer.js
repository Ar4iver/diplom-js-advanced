export const transferFunds = async (from, to, amount) => {
    const response = await fetch('http://localhost:3000/transfer-funds', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ from, to, amount })
    })

    if (!response.ok) {
        throw new Error(`Ошибка перевода: ${response.statusText}`)
    }

    const data = await response.json()

    return data
}
