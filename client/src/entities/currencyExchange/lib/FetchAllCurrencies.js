export const getAllCurrencies = async () => {
    try {
        const response = await fetch('http://localhost:3000/currencies', {
            headers: {
                Authorization: `Basic ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Ошибка при получении данных об аккаунте:', error)
        return null
    }
}
