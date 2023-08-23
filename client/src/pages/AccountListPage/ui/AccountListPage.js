import React, { useContext } from 'react'
import Button from 'shared/ui/Button/Button'
import MySelect from 'shared/ui/Select/Select'
import { UserAccounts } from 'features/accounts/components/UserAccounts/ui/UserAccounts'
import { createAccount } from 'features/createAccount'
import { AccountsContext } from 'entities/accounts'
import { Skeleton } from 'features/accounts/components/UserAccountsItem'
import { toast } from 'shared/ui/Toast'
import styles from './AccountListPage.module.scss'

const AccountListPage = () => {
    const options = [
        { value: 'number', label: 'По номеру' },
        { value: 'balance', label: 'По балансу' },
        { value: 'transaction', label: 'По последней транзакции' }
    ]

    const { fetchAccounts, sortMethod, setSortMethod, isLoading } = useContext(AccountsContext)

    const handleCreateAccount = async () => {
        try {
            await createAccount()
            fetchAccounts()
            toast.success('Счёт успешно создан!')
        } catch (error) {
            console.error(error)
            toast.error('Произошла ошибка при создании счёта')
        }
    }

    const handleSortChange = (value) => {
        let sortName
        switch (value) {
        case 'number':
            sortName = 'номеру'
            break
        case 'balance':
            sortName = 'балансу'
            break
        case 'transaction':
            sortName = 'последней транзакции'
            break
        default:
            break
        }
        setSortMethod(value)
        toast.success(`Сортировка по ${sortName} применена!`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <div className={styles.leftContent}>
                    <h1>Ваши счета</h1>
                    <MySelect options={options} value={sortMethod} onChange={handleSortChange} width={'300px'} />
                </div>
                <div className={styles.rightContent}>
                    <Button id='addAccounts' onClick={handleCreateAccount}>Создать новый счёт</Button>
                </div>
            </div>
            <div className={styles.accountsList}>
                { isLoading ? Array.from({ length: 10 }, (_, index) => <Skeleton key={index} />) : <UserAccounts />}
            </div>
        </div>
    )
}

export default AccountListPage
