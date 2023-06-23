import React from 'react'
import { UserAccountsItem } from '../../UserAccountsItem/ui/UserAccountsItem'
import styles from './UserAccounts.module.scss'

export const UserAccounts = () => {
    // const { accounts, setAccounts } = useState([])

    const accounts = [
        {
            accountNumber: '12345647576sfs657',
            balance: '34534',
            lastTransaction: '21 августа 2023'
        },
        {
            accountNumber: '1234564sdf7576657',
            balance: '34534',
            lastTransaction: '21 августа 2023'
        },
        {
            accountNumber: '123456475sgdf76657',
            balance: '34534',
            lastTransaction: '21 августа 2023'
        },
        {
            accountNumber: '123456475skj76657',
            balance: '34534',
            lastTransaction: '21 августа 2023'
        },
        {
            accountNumber: '1234564757466657',
            balance: '34534',
            lastTransaction: '21 августа 2023'
        },
        {
            accountNumber: '12345647mn576657',
            balance: '34534',
            lastTransaction: '21 августа 2023'
        }
    ]

    // useEffect(() => {
    //   fetchUserAccounts()
    // }, [])

    // const fetchUserAccounts = async () => {
    //   try {
    //     const response = await fetch('api/user/accounts')
    //     const data = await response.json()
    //     setAccounts(data)
    //   } catch (error) {
    //     console.error('Ошибка при получении юзеров', error)
    //   }
    // }

    return (
        <div className={styles.accountsList}>
            {accounts.map((account, index) => (
                <UserAccountsItem key={index} account={account} />
            ))}
        </div>
    )
}
