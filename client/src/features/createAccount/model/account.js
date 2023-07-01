export const createAccount = async () => {
    const response = await fetch('http://localhost:3000/create-account', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${localStorage.getItem('token')}`
        }
    })

    if (!response.ok) {
        throw new Error(`Ошибка создания счета: ${response.statusText}`)
    }

    const data = await response.json()

    return data
}
