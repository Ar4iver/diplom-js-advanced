import React from 'react'
import styles from './TransactionHistory.module.scss'
import { formatCurrency } from 'shared/utils/formatCurrency'

export const TransactionHistory = (props) => {
    const { transactions, accountNumber } = props

    const lastTransactions = transactions.slice(-10).reverse()

    return (
        <div className={styles.container}>
            <h1 className={styles.blockName}>История переводов</h1>
            <div className={styles.wrapperTable}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.headNameTable}>
                            <th className={styles.firstColomn}>Счёт отправителя</th>
                            <th>Счёт получателя</th>
                            <th>Сумма</th>
                            <th className={styles.endColomn}>Дата</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {lastTransactions.map((item, index) => {
                            const isOutTransaction = accountNumber === item.from
                            const transactionColor = isOutTransaction ? 'red' : 'green'
                            const transactionExp = isOutTransaction ? '-' : '+'
                            const transactionDate = new Date(item.date).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })

                            return (
                                <tr className={styles.transaction} key={index}>
                                    <td className={styles.dataColumn}>{item.from}</td>
                                    <td className={styles.dataColumn}>{item.to}</td>
                                    <td className={styles.dataColumn} style={{ color: transactionColor }}>
                                        <span>{transactionExp}</span> {formatCurrency(item.amount)}
                                    </td>
                                    <td className={styles.dataColumn}>{transactionDate}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
