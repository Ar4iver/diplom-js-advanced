import React from 'react'
import Select from 'shared/ui/Select/Select'
import Button from 'shared/ui/Button/Button'
import { UserAccounts } from 'features/accounts/components/UserAccounts/ui/UserAccounts'
import styles from './AccountListPage.module.scss'

function AccountListPage () {
    const options = [
        { value: 'number', label: 'По номеру' },
        { value: 'balance', label: 'По балансу' },
        { value: 'transaction', label: 'По последней транзакции' }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <div className={styles.leftContent}>
                    <h1>Ваши счета</h1>
                    <Select options={options} />
                </div>
                <div className={styles.rightContent}>
                    <Button>Создать новый счёт</Button>
                </div>
            </div>
            <div className={styles.accountsList}>
                <UserAccounts />
            </div>
        </div>
    )
}

export default AccountListPage
