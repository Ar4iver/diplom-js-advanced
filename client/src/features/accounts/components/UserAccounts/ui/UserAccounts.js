import React, { useContext } from 'react'
import { UserAccountsItem } from '../../UserAccountsItem/ui/UserAccountsItem'
import styles from './UserAccounts.module.scss'
import { AccountsContext } from 'entities/accounts'

export const UserAccounts = () => {
    const { accounts, sortMethod } = useContext(AccountsContext)

    let lastTransactionDateA, lastTransactionDateB
    const sortedAccounts = [...accounts].sort((a, b) => {
        switch (sortMethod) {
        case 'number':
            return a.account.localeCompare(b.account)
        case 'balance':
            return b.balance - a.balance
        case 'transaction':
            lastTransactionDateA = a.transactions.length ? a.transactions[0].date : 0
            lastTransactionDateB = b.transactions.length ? b.transactions[0].date : 0
            return new Date(lastTransactionDateB) - new Date(lastTransactionDateA)
        default:
            return 0
        }
    })

    return (
        <div className={styles.accountsList}>
            {sortedAccounts && sortedAccounts.map((account, index) => (
                <UserAccountsItem key={index} account={account} />
            ))}
        </div>
    )
}
