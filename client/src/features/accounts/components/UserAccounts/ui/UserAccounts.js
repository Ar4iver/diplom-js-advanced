import React, { useEffect, useState } from 'react'
import { UserAccountsItem } from 'features/UserAccountsItem'
import styles from './UserAccountsItem.module.scss'

export const UserAccounts = () => {
  const { accounts, setAccounts } = useState([])

  useEffect(() => {
    fetchUserAccounts()
  }, [])

  const fetchUserAccounts = async () => {
    try {
      const response = await fetch('api/user/accounts')
      const data = await response.json()
      setAccounts(data)
    } catch (error) {
      console.error('Ошибка при получении юзеров', error)
    }
  }

  return (
    <div>
      {accounts.map((account, index) => (
        <UserAccountsItem account={account} key={index} />
      ))}
    </div>
  )
}
