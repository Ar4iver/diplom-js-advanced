import React from 'react'
import styles from './CurrencyExchangeForm.module.scss'
import MySelect from 'shared/ui/Select/Select'

export const CurrencyExchangeForm = () => {
    return (
        <form>
            <h2 className={styles.headForm}>
                Обмен валюты
            </h2>
            <span>Из<MySelect /></span><span>в<MySelect /></span>
        </form>
    )
}
