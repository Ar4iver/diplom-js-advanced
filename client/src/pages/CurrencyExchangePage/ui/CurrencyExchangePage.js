import React, { useEffect, useRef, useState } from 'react'
import styles from '../ui/CurrencyExchangePage.module.scss'
import { Currency } from 'features/currencyExchangePage/Сurrency'
import { CurrencyExchangeForm } from 'features/currencyExchangePage/СurrencyExchangeForm'
import { getCurrencies, getAllCurrencies } from 'entities/currencyExchange'
import CourseChangeTable from 'features/currencyExchangePage/СourseСhangeTable/ui/CourseChangeTable'

const CurrencyExchangePage = () => {
    const [currencies, setCurrencies] = useState([])
    const [allCurrencies, setAllCorrencies] = useState()
    const leftContentRef = useRef(null)
    const rightContentRef = useRef(null)

    useEffect(() => {
        const fetchCurrencies = async () => {
            const [dataCurrencies, dataAllCurrencies] = await Promise.all([getCurrencies(), getAllCurrencies()])
            setCurrencies(dataCurrencies)
            setAllCorrencies(dataAllCurrencies)
        }
        fetchCurrencies()
    }, [])

    useEffect(() => {
        const setRightContentHeight = () => {
            if (leftContentRef.current && rightContentRef.current) {
                rightContentRef.current.style.maxHeight = `${leftContentRef.current.offsetHeight}px`
            }
        }

        setRightContentHeight()

        window.addEventListener('resize', setRightContentHeight)

        return () => window.removeEventListener('resize', setRightContentHeight)
    }, [currencies, allCurrencies])

    if (!currencies?.payload || !allCurrencies?.payload) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.headerPage}>Валютный обмен</h2>
            <div className={styles.wrapperContent}>
                <div ref={leftContentRef} className={styles.leftContent}>
                    <div className={styles.currencies}>
                        <h3 className={styles.blockHead}>Ваши валюты</h3>
                        <div className={styles.currenciesList}>
                            <Currency currencies={currencies.payload} />
                        </div>
                    </div>
                    <div className={styles.currencyExchange}>
                        <CurrencyExchangeForm allCurrencies={allCurrencies.payload} />
                    </div>
                </div>
                <div ref={rightContentRef} className={styles.rightContent}>
                    <CourseChangeTable />
                </div>
            </div>
        </div>
    )
}

export default CurrencyExchangePage
