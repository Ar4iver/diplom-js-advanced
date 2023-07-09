import React from 'react'
import styles from './BalanceChart.module.scss'
import BarChart from 'shared/ui/charts/BarChart/BarChart'

export const BalanceChart = (props) => {
    const { accountData, period, showTransactionsRatio, title } = props

    return (
        <BarChart accountData={accountData} period={period} showTransactionsRatio={showTransactionsRatio} title={title}/>
    )
}
