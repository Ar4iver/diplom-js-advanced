import React, { useEffect, useState } from 'react'
import styles from '../ui/CurrencyExchangePage.module.scss'
import { getAllCurrencies } from 'entities/currencyExchange/lib/FetchAllCurrencies'
import { Currency } from 'features/currencyExchangePage/Сurrency'
import { CurrencyExchangeForm } from 'features/currencyExchangePage/СurrencyExchangeForm'

const CurrencyExchangePage = () => {
    const [currencies, setCurrencies] = useState([])

    console.log(currencies)

    useEffect(() => {
        const getCurrens = async () => {
            const data = await getAllCurrencies()
            setCurrencies(data)
        }
        getCurrens()
    }, [])

    if (!currencies.payload) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.headerPage}>Валютный обмен</h2>
            <div className={styles.wrapperContent}>
                <div className={styles.leftContent}>
                    <div className={styles.currencies}>
                        <h3 className={styles.blockHead}>
                            Ваши валюты
                        </h3>
                        <div className={styles.currenciesList}>
                            <Currency currencies={currencies.payload} />
                        </div>
                    </div>
                    <div className={styles.currencyExchange}>
                        <CurrencyExchangeForm />
                    </div>
                </div>
                <div className={styles.rightContent}>

                </div>
            </div>
        </div>
    )
}

export default CurrencyExchangePage
