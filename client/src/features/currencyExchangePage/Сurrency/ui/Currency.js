import React from 'react'
import styles from './Currency.module.scss'
import { formatCurrency } from '../../../../shared/utils/formatCurrency'

export const Currency = (props) => {
    const { currencies } = props

    return (
        <ul className={styles.list}>
            {Object.keys(currencies).map(key => {
                const item = currencies[key]
                return (
                    <li className={styles.param} key={key}>
                        <span className={styles.param__value}>{formatCurrency(item.amount, item.code)}</span>
                        <span className={styles.param__prop}>{item.code}</span>
                    </li>
                )
            })}
        </ul>
    )
}
