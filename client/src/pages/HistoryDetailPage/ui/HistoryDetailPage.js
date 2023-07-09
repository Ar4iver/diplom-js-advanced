import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AccountDetailsContext } from 'entities/accountsDetails'
import { formatCurrency } from 'shared/utils/formatCurrency'
import BalanceChartHistoryPage from 'features/historyDetailPage/components/BalanceChartDefault/BalanceChartHistoryPage'
import { TransactionHistory } from 'features/accountsPage/components/TransactionHistory/TransactionHistory'
import AppLink from 'shared/ui/AppLink/AppLink'
import Arrow from 'shared/assets/svg/arrow.svg'
import styles from './HistoryDetailPage.module.scss'

export const HistoryDetailPage = () => {
    const { accountNumber } = useParams()
    const { accountDetails, fetchAccountDetails } = useContext(AccountDetailsContext)

    useEffect(() => {
        fetchAccountDetails(accountNumber)
    }, [])

    if (!accountDetails) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.historyPageContainer}>
            <div className={styles.top}>
                <div className={styles.topContentLeft}>
                    <h2 className={styles.headerDetailPage}>История баланса</h2>
                    <span className={styles.number}>№ {accountNumber}</span>
                </div>
                <div className={styles.topContentRight}>
                    <AppLink to={`/accounts/${accountNumber}`} className={styles.link}><span className={styles.arrowSvg}><img src={Arrow} alt="Arrow" /></span>Вернуться назад</AppLink>
                    <span className={styles.accountBalance}>Баланс:<span className={styles.countBalance}> {formatCurrency(accountDetails.balance)}</span></span>
                </div>
            </div>
            <div className={styles.wrapperbalanceChart}>
                <div className={styles.balanceChart}><BalanceChartHistoryPage accountData={accountDetails} period={12} showTransactionsRatio={false} title={'Динамика баланса'}/></div>
            </div>
            <div className={styles.wrapperbalanceChart}>
                <div className={styles.balanceChart}><BalanceChartHistoryPage accountData={accountDetails} period={12} showTransactionsRatio={true} title={'Соотношение входящих исходящих транзакций'}/></div>
            </div>
            <div className={styles.historyTransaction}>
                <TransactionHistory accountNumber={accountNumber} transactions={accountDetails.transactions} />
            </div>
        </div>
    )
}
