import React, { useContext } from 'react'
import Select from 'shared/ui/Select/Select'
import Button from 'shared/ui/Button/Button'
import { UserAccounts } from 'features/accounts/components/UserAccounts/ui/UserAccounts'
import { createAccount } from 'features/createAccount'
import { AccountsContext } from 'entities/accounts'
import styles from './AccountListPage.module.scss'

const AccountListPage = () => {
    const options = [
        { value: 'number', label: 'По номеру' },
        { value: 'balance', label: 'По балансу' },
        { value: 'transaction', label: 'По последней транзакции' }
    ]

    const { fetchAccounts } = useContext(AccountsContext)

    const handleCreateAccount = async () => {
        try {
            await createAccount()
            fetchAccounts()
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <div className={styles.leftContent}>
                    <h1>Ваши счета</h1>
                    <Select options={options} />
                </div>
                <div className={styles.rightContent}>
                    <Button onClick={handleCreateAccount}>Создать новый счёт</Button>
                </div>
            </div>
            <div className={styles.accountsList}>
                <UserAccounts />
            </div>
        </div>
    )
}

export default AccountListPage
