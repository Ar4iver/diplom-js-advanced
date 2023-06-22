import React from 'react'
import styles from './UserAccountsItem.module.scss'
import AppLink from 'shared/ui/AppLink/AppLink'

export const UserAccountsItem = ({ account }) => {
  return (
    <div className={styles.accountItem}>
      <div className={styles.headerCard}>
        <div className={styles.accountNumber}>{account.accountNumber}</div>
        <div className={styles.balance}>{account.balance} ₽</div>
      </div>
      <div className={styles.footerItem}>
        <div className={styles.wrapperInfoTransaction}>
          <h3 className={styles.infoTransaction}>Последняя транзакция:<br></br><span className={styles.lastTransactionInfo}>{account.lastTransaction}</span></h3>
          
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
