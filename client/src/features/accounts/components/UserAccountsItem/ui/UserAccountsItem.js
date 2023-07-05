import React from 'react'
import AppLink from 'shared/ui/AppLink/AppLink'
import styles from './UserAccountsItem.module.scss'
import { formatDate } from 'shared/utils/formatDate'
import { formatCurrency } from 'shared/utils/formatCurrency'

export const UserAccountsItem = ({ account }) => {
    return (
        <div className={styles.accountItem}>
            <div className={styles.headerCard}>
                <div className={styles.accountNumber}>{account.account}</div>
                <div className={styles.balance}>{formatCurrency(account.balance)}</div>
            </div>
            <div className={styles.footerItem}>
                <div className={styles.wrapperInfoTransaction}>
                    <h3 className={styles.infoTransaction}>
                        Последняя транзакция:
                        <br />
                        <span className={styles.lastTransactionInfo}>
                            {account.transactions.length ? formatDate(account.transactions.at(-1).date) : <>Транзакций не найдено</> }
                        </span>
                    </h3>
                </div>
                <AppLink
                    to={`/accounts/${account.account}`}
                    className={styles.link}
                >
                    Открыть
                </AppLink>
            </div>
        </div>
    )
}
