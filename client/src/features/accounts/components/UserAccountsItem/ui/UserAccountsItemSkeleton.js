import React from 'react'
import styles from './UserAccountsItem.module.scss'

export const UserAccountsItemSkeleton = () => {
    return (
        <div className={styles.accountItem}>
            <div className={styles.headerCard}>
                <div className={styles.accountNumber}>
                    <div className={styles.skeleton} style={{ width: '200px', height: '20px' }}></div>
                </div>
                <div className={styles.balance}>
                    <div className={styles.skeleton} style={{ width: '100px', height: '20px' }}></div>
                </div>
            </div>
            <div className={styles.footerItem}>
                <div className={styles.wrapperInfoTransaction}>
                    <h3 className={styles.infoTransaction}>
                        Последняя транзакция:
                        <br />
                        <span className={styles.lastTransactionInfo}>
                            <div className={styles.skeleton} style={{ width: '150px', height: '15px' }}></div>
                        </span>
                    </h3>
                </div>
                <div className={styles.link}>
                    <div className={styles.skeleton} style={{ width: '70px', height: '30px' }}></div>
                </div>
            </div>
        </div>
    )
}
