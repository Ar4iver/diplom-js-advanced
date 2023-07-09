import BarChart from 'shared/ui/charts/BarChart/BarChart'

import React from 'react'

const BalanceChartDefault = (props) => {
    const { accountData, period, showTransactionsRatio, title } = props

    return (
        <BarChart accountData={accountData} period={period} showTransactionsRatio={showTransactionsRatio} title={title} />
    )
}

export default BalanceChartDefault
