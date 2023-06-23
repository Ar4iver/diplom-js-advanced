import React from 'react'
import AppLink from 'shared/ui/AppLink/AppLink'
import styles from './UserAccountsItem.module.scss'

export function UserAccountsItem ({ account }) {
    return (
        <div className={styles.accountItem}>
            <div className={styles.headerCard}>
                <div className={styles.accountNumber}>{account.accountNumber}</div>
                <div className={styles.balance}>{account.balance} ₽</div>
            </div>
            <div className={styles.footerItem}>
                <div className={styles.wrapperInfoTransaction}>
                    <h3 className={styles.infoTransaction}>
                        Последняя транзакция:
                        <br />
                        <span className={styles.lastTransactionInfo}>
                            {account.lastTransaction}
                        </span>
                    </h3>
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
