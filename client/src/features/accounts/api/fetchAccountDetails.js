export const fetchAccountDetails = async (accountNumber) => {
    try {
        const response = await fetch(`http://localhost:3000/account/${accountNumber}`, {
            headers: {
                Authorization: `Basic ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json()

        return data.payload
    } catch (error) {
        console.error('Ошибка при получении данных об аккаунте:', error)
        return null
    }
}
