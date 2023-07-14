export const formatCurrency = (amount, currency = 'RUB') => {
    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0
    })

    return formatter.format(amount)
}
