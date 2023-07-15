import React, { useState } from 'react'
import styles from './CurrencyExchangeForm.module.scss'
import MySelect from 'shared/ui/Select/Select'

export const CurrencyExchangeForm = (props) => {
    const { allCurrencies } = props

    const options = allCurrencies.map(currency => ({ value: currency, label: currency }))

    const [selectOne, setSelectOne] = useState(options[0].value)
    const [selectTwo, setSelectTwo] = useState(options[1].value)

    const handleOnChangeOne = (selectedOption) => {
        setSelectOne(selectedOption.value)
    }

    const handleOnChangeTwo = (selectedOption) => {
        setSelectTwo(selectedOption.value)
    }

    const optionsForSelectTwo = options.filter(option => option.value !== selectOne)

    const custom = {
        control: provided => ({ ...provided, width: 200 }),
        menu: provided => ({ ...provided, width: 200 })
    }

    return (
        <form>
            <h2 className={styles.headForm}>
                Обмен валюты
            </h2>
            <div className={styles.wrapperSelect}>
                <div className={styles.select}>
                    <span>Из</span><div style={{ marginLeft: '20px', marginRight: '20px' }}><MySelect options={options} value={selectOne} onChange={handleOnChangeOne} /></div>
                </div>
                <div className={styles.select}>
                    <span>в</span><div style={{ marginLeft: '20px' }}><MySelect options={optionsForSelectTwo} value={selectTwo} onChange={handleOnChangeTwo} styles={custom} /></div>
                </div>
            </div>
        </form>
    )
}
