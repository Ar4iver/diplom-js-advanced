import { toast } from 'shared/ui/Toast/index.js'

export const getCurrencyBuy = async (from, to, amount) => {
    try {
        const response = await fetch('http://localhost:3000/currency-buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ from, to, amount })
        })

        const data = await response.json()

        if (data.error) {
            switch (data.error) {
            case 'Overdraft prevented':
                return toast.error('На валютном счёте недостаточно средств')
            case 'Invalid account from':
                return toast.error('Не указан адрес счёта списания, или этот счёт не принадлежит нам')
            case 'Invalid account to':
                return toast.error('Не указан счёт зачисления, или этого счёта не существует')
            case 'Invalid amount':
                return toast.error('Не указана сумма перевода, или она отрицательная')
            }
        } else {
            toast.success('Перевод валюты успешно выполнен!')
            return data
        }
    } catch (error) {
        toast.error('Произошла ошибка при выполнении перевода')
        console.error(error)
        return null
    }
}
