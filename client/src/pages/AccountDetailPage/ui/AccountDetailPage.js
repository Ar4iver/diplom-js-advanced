import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './AccountDetailPage.module.scss'
import AppLink from 'shared/ui/AppLink/AppLink'
import { fetchAccountDetails } from 'features/accounts/api/fetchAccountDetails'
import { formatCurrency } from 'shared/utils/formatCurrency'
import { TransferForm } from 'features/accountsPage/components/TransferForm/TransferForm'
import { BalanceChart } from 'features/accountsPage/components/BalanceChart/BalanceChart'
import Arrow from 'shared/assets/svg/arrow.svg'
import { TransactionHistory } from 'features/accountsPage/components/TransactionHistory/TransactionHistory'

export const AccountDetailPage = () => {
    const { accountNumber } = useParams()
    const [accountDetails, setAccountDetails] = useState(null)

    useEffect(() => {
        const getAccountDetails = async () => {
            const data = await fetchAccountDetails(accountNumber)
            setAccountDetails(data)
        }
        getAccountDetails()
    }, [accountNumber])

    if (!accountDetails) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.detailPageContainer}>
            <div className={styles.top}>
                <div className={styles.topContentLeft}>
                    <h2 className={styles.headerDetailPage}>Просмотр счёта</h2>
                    <span className={styles.number}>№ {accountNumber}</span>
                </div>
                <div className={styles.topContentRight}>
                    <AppLink to={'/accounts'} className={styles.link}><span className={styles.arrowSvg}><img src={Arrow} alt="Arrow" /></span>Вернуться назад</AppLink>
                    <span className={styles.accountBalance}>Баланс:<span className={styles.countBalance}> {formatCurrency(accountDetails.balance)}</span></span>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.transferForm}><TransferForm accountNumber={accountNumber} /></div>
                <div className={styles.balanceChart}><BalanceChart accountData={accountDetails} /></div>
            </div>
            <div className={styles.historyTransaction}><TransactionHistory transaction={accountDetails.transactions} /></div>
        </div>
    )
}
