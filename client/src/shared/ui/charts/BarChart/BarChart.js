import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const BarChart = ({ accountData }) => {
    const now = new Date()

    const labels = Array.from({ length: 6 }, (_, i) => {
        const month = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1)
        return month.toLocaleString('ru', { month: 'long' })
    })

    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1)

    const recentTransactions = accountData.transactions.filter(transaction => {
        const transactionDate = new Date(transaction.date)
        return transactionDate >= sixMonthsAgo
    })

    const balanceChangesByMonth = Array(6).fill(0)
    recentTransactions.forEach(transaction => {
        const transactionDate = new Date(transaction.date)
        const monthIndex = transactionDate.getMonth() - sixMonthsAgo.getMonth()
        if (monthIndex >= 0) {
            balanceChangesByMonth[monthIndex] += transaction.amount
        }
    })

    const data = {
        labels,
        datasets: [
            {
                label: 'Изменение баланса',
                data: balanceChangesByMonth,
                backgroundColor: '#116acc'
            }
        ]
    }

    const minBalance = Math.min(...balanceChangesByMonth)
    const maxBalance = Math.max(...balanceChangesByMonth)

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Динамика баланса'
            }
        },
        scales: {
            y: {
                min: minBalance,
                max: maxBalance,
                ticks: {
                    stepSize: maxBalance - minBalance,
                    callback: function (value) {
                        if (value === minBalance || value === maxBalance) {
                            return Math.trunc(value)
                        }
                    }
                }
            }
        }
    }

    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart
