import React from 'react'
import styles from './UserAccountsItem.module.scss'
import AppLink from '../../../../../shared/ui/AppLink/AppLink'

export const UserAccountsItem = ({ account }) => {
  return (
    <div className={styles.accountItem}>
      <div className={styles.headerCard}>
        <div>{account.accountNumber}</div>
        <div>{account.balance}</div>
      </div>
      <div className={styles.footerItem}>
        <div>
          <h3>Последняя транзакция</h3>
          <span>{account.lastTransaction}</span>
        </div>
        <AppLink
          to={`/accounts/${account.accountNumber}`}
          className={styles.link}
        >
          Открыть
        </AppLink>
      </div>
    </div>
  )
}
