import React from 'react'
import styles from './BalanceChart.module.scss'
import BarChart from 'shared/ui/charts/BarChart/BarChart'

export const BalanceChart = React.forwardRef((props) => {
    const { accountData, period, showTransactionsRatio, title } = props

    return (
        <div>
            <BarChart accountData={accountData} period={period} showTransactionsRatio={showTransactionsRatio} title={title}/>
        </div>
    )
})

BalanceChart.displayName = 'BalanceChart'
