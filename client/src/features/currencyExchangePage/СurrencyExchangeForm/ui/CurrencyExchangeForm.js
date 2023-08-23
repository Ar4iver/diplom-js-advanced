import React, { useState } from 'react'
import styles from './CurrencyExchangeForm.module.scss'
import MySelect from 'shared/ui/Select/Select'
import CustomInput from 'shared/ui/Input/Input'
import Button from 'shared/ui/Button/Button'
import { toast } from 'shared/ui/Toast'
import { getCurrencyBuy } from '../../../currencyBuy'

export const CurrencyExchangeForm = (props) => {
    const { allCurrencies } = props

    const options = allCurrencies.map(currency => ({ value: currency, label: currency }))

    const [selectOne, setSelectOne] = useState(options[0].value)
    const [selectTwo, setSelectTwo] = useState(options[1].value)
    const [amount, setAmount] = useState(0)
    const [amountError, setAmountError] = useState(false)

    const handleOnChangeOne = (selectedOption) => {
        setSelectOne(selectedOption)
    }

    const handleOnChangeTwo = (selectedOption) => {
        setSelectTwo(selectedOption)
    }

    const optionsForSelectTwo = options.filter(option => option.value !== selectOne)

    const validateFields = () => {
        let isValid = true
        if (!amount || parseFloat(amount) === 0) {
            toast.error('Укажите корректную сумму обмена.')
            setAmountError(true)
            isValid = false
            setAmount('')
        } else {
            setAmountError(false)
        }
        return isValid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateFields()) {
            try {
                await getCurrencyBuy(selectOne, selectTwo, amount)
            } catch (error) {
                toast.error('Во время обмена произошла ошибка')
                console.error('Ошибка при обмене:', error)
            }
        }
    }

    const errorStyle = {
        borderColor: 'red',
        borderWidth: '2px',
        outline: 'none'
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className={styles.headForm}>
                Обмен валюты
            </h2>
            <div className={styles.formbody}>
                <div className={styles.leftContent}>
                    <div className={styles.wrapperSelect}>
                        <div className={styles.select}>
                            <span>Из</span>
                            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                                <MySelect options={options} value={selectOne} onChange={handleOnChangeOne} width={'130px'} />
                            </div>
                        </div>
                        <div className={styles.select}>
                            <span>в</span>
                            <div style={{ marginLeft: '20px' }}>
                                <MySelect options={optionsForSelectTwo} value={selectTwo} onChange={handleOnChangeTwo} width={'130px'} />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <span style={{ marginRight: '8px' }}>
                            Сумма
                        </span>
                        <div className={styles.inputStyle}>
                            <CustomInput className={styles.inputStyle} style={amountError ? errorStyle : null} value={amount} handleInputChange={(e) => setAmount(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <Button type='submit'>Обменять</Button>
                </div>
            </div>
        </form>
    )
}
