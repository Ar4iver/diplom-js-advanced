import React from 'react'
import { Chart, registerables } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { formatCurrency } from '../../../utils/formatCurrency'

Chart.register(...registerables)

Chart.register({
    id: 'chartAreaBorder',
    afterDraw: (chart, args, options) => {
        const { ctx, chartArea: { left, top, width, height } } = chart
        ctx.save()
        ctx.strokeStyle = options.borderColor
        ctx.lineWidth = options.borderWidth
        ctx.strokeRect(left, top, width, height)
        ctx.restore()
    }
})

const BarChart = ({ accountData, period, showTransactionsRatio, title }) => {
    const now = new Date()
    console.log(accountData)
    const accountNumber = accountData?.account

    const labels = Array(period)
        .fill()
        .map((_, i) => {
            const month = new Date(now.getFullYear(), now.getMonth() - (period - 1 - i), 1)
            return month.toLocaleString('ru', { month: 'long' }).slice(0, 3)
        })

    const periodAgo = new Date(now.getFullYear(), now.getMonth() - (period - 1), 1)

    const recentTransactions = accountData.transactions.filter(transaction => {
        const transactionDate = new Date(transaction.date)
        return transactionDate >= periodAgo
    })

    const calculateBalanceChangesByMonth = (recentTransactions, periodAgo, showTransactionsRatio, accountNumber) => {
        const balanceChangesByMonth = Array(period).fill(0)
        const incomingByMonth = Array(period).fill(0)
        const outgoingByMonth = Array(period).fill(0)

        recentTransactions.forEach(transaction => {
            const transactionDate = new Date(transaction.date)
            const monthIndex = (transactionDate.getFullYear() - periodAgo.getFullYear()) * 12 + transactionDate.getMonth() - periodAgo.getMonth()
            if (monthIndex >= 0) {
                if (showTransactionsRatio) {
                    if (transaction.from === accountNumber) {
                        outgoingByMonth[monthIndex] += transaction.amount
                    } else {
                        incomingByMonth[monthIndex] += transaction.amount
                    }
                }
                balanceChangesByMonth[monthIndex] += transaction.amount
            }
        })

        return { balanceChangesByMonth, incomingByMonth, outgoingByMonth }
    }

    const { balanceChangesByMonth, incomingByMonth, outgoingByMonth } = calculateBalanceChangesByMonth(recentTransactions, periodAgo, showTransactionsRatio, accountNumber)

    const minBalance = Math.min(...balanceChangesByMonth)
    const maxBalance = Math.max(...balanceChangesByMonth)

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: title,
                font: {
                    size: 20,
                    weight: 700
                },
                color: '#000',
                align: 'start'
            },
            legend: {
                display: false
            },
            chartAreaBorder: {
                borderColor: '#000',
                borderWidth: 2
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    color: '#000',
                    font: {
                        size: 20,
                        weight: 700
                    }
                }
            },
            y: {
                stacked: true,
                min: minBalance,
                max: maxBalance,
                position: 'right',
                ticks: {
                    color: '#000',
                    font: {
                        size: 20,
                        weight: 500
                    },
                    stepSize: maxBalance - minBalance,
                    callback: function (value) {
                        if (value === minBalance || value === maxBalance) {
                            return formatCurrency(Math.trunc(value))
                        }
                    }
                }
            }
        }
    }

    const datasets = showTransactionsRatio
        ? [
            {
                label: 'Исходящие',
                data: outgoingByMonth,
                backgroundColor: '#FD4E5D',
                stack: 'combined'
            },
            {
                label: 'Входящие',
                data: incomingByMonth,
                backgroundColor: '#76CA66',
                stack: 'combined'
            }
        ]
        : [
            {
                label: 'Изменение баланса',
                data: balanceChangesByMonth,
                backgroundColor: '#116acc'
            }
        ]

    const data = {
        labels,
        datasets
    }

    return <Bar options={options} data={data} />
}

export default BarChart
