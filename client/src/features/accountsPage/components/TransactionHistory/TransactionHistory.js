import React from 'react'
import styles from './TransactionHistory.module.scss'

export const TransactionHistory = (props) => {
    const { transaction } = props

    console.log(transaction)

    return (
        <div className={styles.container}>
            <h1>История переводов</h1>
            <div className={styles.table}></div>
        </div>
    )
}
