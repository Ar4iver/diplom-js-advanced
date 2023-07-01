import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './AccountDetailPage.module.scss'
import AppLink from 'shared/ui/AppLink/AppLink'
import { fetchAccountDetails } from 'features/accounts/fetchAccountDetails'

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

    console.log(accountDetails)

    if (!accountDetails) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.detailPageContainer}>
            <div className={styles.top}>
                <div className={styles.topContentLeft}>
                    <h2 className={styles.headerDetailPage}>Просмотр счёта</h2>
                    <span className={styles.number}>{accountNumber}</span>
                </div>
                <div>
                    <AppLink>Вернуться назад</AppLink>
                    <span>Баланс: {accountDetails.balance}</span>
                </div>
            </div>
            <div className={styles.middle}></div>
        </div>
    )
}
