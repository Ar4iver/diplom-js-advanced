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
import { DraggableComponentsAccountDetails } from 'features/DraggableComponents/DraggableComponents'

export const AccountDetailPage = () => {
    const [components, setComponents] = useState([])
    const { accountNumber } = useParams()
    const [accountDetails, setAccountDetails] = useState(null)

    useEffect(() => {
        const getAccountDetails = async () => {
            const data = await fetchAccountDetails(accountNumber)
            setAccountDetails(data)

            setComponents([
                {
                    id: '1',
                    component: <TransferForm accountNumber={accountNumber} onTransferSuccess={fetchAccountDetails} />
                },
                {
                    id: '2',
                    component: <BalanceChart accountData={data} period={6} showTransactionsRatio={false} title={'Динамика баланса'} />
                }
            ])
        }
        getAccountDetails()
    }, [accountNumber, accountDetails, fetchAccountDetails])

    if (!accountDetails) {
        return <div>Loading...</div>
    }

    const middleStyleProps = {
        display: 'flex',
        gap: '50px'
    }

    return (
        accountDetails &&
        <div className={styles.detailPageContainer}>
            <div className={styles.top}>
                <div className={styles.topContentLeft}>
                    <h2 className={styles.headerDetailPage}>Просмотр счёта</h2>
                    <span className={styles.number}>№ {accountNumber}</span>
                </div>
                <div className={styles.topContentRight}>
                    <AppLink to={'/accounts'} className={styles.link}>
                        <span className={styles.arrowSvg}><img src={Arrow} alt="Arrow" /></span>Вернуться назад
                    </AppLink>
                    <span className={styles.accountBalance}>Баланс:<span className={styles.countBalance}> {formatCurrency(accountDetails.balance)}</span></span>
                </div>
            </div>
            <div className={styles.middle}>
                <DraggableComponentsAccountDetails middleStyleProps={middleStyleProps} components={components} setComponents={setComponents} />
            </div>
            <div className={styles.historyTransaction}>
                <AppLink to={`/accounts/${accountNumber}/history-details`}>
                    <TransactionHistory accountNumber={accountNumber} transactions={accountDetails.transactions} />
                </AppLink>
            </div>
        </div>
    )
}
