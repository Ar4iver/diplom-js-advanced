import React from 'react'
import Button from 'shared/ui/Button/Button'
import styles from './UserAccounts.module.scss'

export const UserAccountsItem = (props) => {
  const { account, key } = props

  return (
    <div key={key} className={styles.account}>
      <div>
        <div>{account.number}</div>
        <div>{account.balance}</div>
      </div>
      <div>
        <div>
          <h3>Последняя транзакция</h3>
          <span>21 августа 2021</span>
        </div>
        <Button>Открыть</Button>
      </div>
    </div>
  )
}
