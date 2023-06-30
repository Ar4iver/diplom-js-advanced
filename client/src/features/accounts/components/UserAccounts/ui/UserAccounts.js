import React, { useContext, useEffect, useState } from 'react'
import { UserAccountsItem } from '../../UserAccountsItem/ui/UserAccountsItem'
import styles from './UserAccounts.module.scss'
import { AuthContext } from '../../../../../entities/auth'

export const UserAccounts = () => {
    const [accounts, setAccounts] = useState([])

    const token = useContext(AuthContext)

    console.log(token)

    useEffect(() => {
        const fetchAccounts = async () => {
            const response = await fetch('http://localhost:3000/accounts', {
                headers: {
                    Authorization: `Basic ${token}`
                }
            })
            const data = await response.json()
            setAccounts(data.payload)
        }
        fetchAccounts()
    }, [])

    console.log(accounts)

    return (accounts &&
    <div className={styles.accountsList}>
        {accounts.map((account, index) => (
            <UserAccountsItem key={index} account={account} />
        ))}
    </div>
    )
}
