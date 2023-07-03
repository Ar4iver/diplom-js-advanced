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
import { faker } from '@faker-js/faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const BarChart = () => {
    const labels = ['Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август']

    const datasets = [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }
    ]

    const maxValue = Math.max(...datasets[0].data)

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
                min: 0,
                max: maxValue
            }
        }
    }

    const data = {
        labels,
        datasets
    }

    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart
