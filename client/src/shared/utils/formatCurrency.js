export const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    })

    return formatter.format(amount)
}
