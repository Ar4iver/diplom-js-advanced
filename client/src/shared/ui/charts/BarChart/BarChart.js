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

const BarChart = ({ accountData }) => {
    const now = new Date()

    const labels = Array(6)
        .fill()
        .map((_, i) => {
            const month = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1)
            return month.toLocaleString('ru', { month: 'long' }).slice(0, 3)
        })

    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1)

    const recentTransactions = accountData.transactions.filter(transaction => {
        const transactionDate = new Date(transaction.date)
        return transactionDate >= sixMonthsAgo
    })

    const calculateBalanceChangesByMonth = (recentTransactions, sixMonthsAgo) => {
        const balanceChangesByMonth = Array(6).fill(0)

        recentTransactions.forEach(transaction => {
            const transactionDate = new Date(transaction.date)
            const monthIndex = transactionDate.getMonth() - sixMonthsAgo.getMonth()
            if (monthIndex >= 0) {
                balanceChangesByMonth[monthIndex] += transaction.amount
            }
        })

        return balanceChangesByMonth
    }

    const balanceChangesByMonth = calculateBalanceChangesByMonth(recentTransactions, sixMonthsAgo)

    const minBalance = Math.min(...balanceChangesByMonth)
    const maxBalance = Math.max(...balanceChangesByMonth)

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Динамика баланса',
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

    return <Bar options={options} data={data} />
}

export default BarChart
