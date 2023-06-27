import React, { useContext } from 'react'
import { UserAccountsItem } from '../../UserAccountsItem/ui/UserAccountsItem'
import styles from './UserAccounts.module.scss'
import { AccountsContext } from '../../../../../entities/accounts'

export const UserAccounts = () => {
    const accounts = useContext(AccountsContext)
    return (
        <div className={styles.accountsList}>
            {accounts.map((account, index) => (
                <UserAccountsItem key={index} account={account} />
            ))}
        </div>
    )
}
