import React, { useContext } from 'react'
import { UserAccountsItem } from '../../UserAccountsItem/ui/UserAccountsItem'
import styles from './UserAccounts.module.scss'
import { AccountsContext } from 'entities/accounts'

export const UserAccounts = () => {
    const data = useContext(AccountsContext)
    const accounts = data.accounts

    return (
        <div className={styles.accountsList}>
            {accounts && accounts.map((account, index) => (
                <UserAccountsItem key={index} account={account} />
            ))}
        </div>
    )
}
