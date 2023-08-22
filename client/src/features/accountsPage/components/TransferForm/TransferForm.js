import React, { useState } from 'react'
import { FaCcMastercard } from 'react-icons/fa'
import { LiaCcVisa } from 'react-icons/lia'
import styles from './SendForm.module.scss'
import Button from 'shared/ui/Button/Button'
import CustomInput from 'shared/ui/Input/Input'
import Mail from 'shared/assets/svg/mail.svg'
import { toast } from 'shared/ui/Toast'
import { transferFunds } from '../../../transferFunds'

export const TransferForm = (props) => {
    const { accountNumber } = props
    const [recipient, setRecipient] = useState('')
    const [sum, setSum] = useState('')
    const [cardType, setCardType] = useState('')
    const [recipientError, setRecipientError] = useState(false)
    const [sumError, setSumError] = useState(false)

    const sendTransfer = async () => {
        await transferFunds(accountNumber, recipient, sum)
    }

    const CardType = (number) => {
        if (number.startsWith('4')) {
            return <LiaCcVisa/>
        } else if (number.startsWith('5')) {
            return <FaCcMastercard/>
        }
        return ''
    }

    const handleRecipientChange = (e, isCardInput) => {
        const value = e.target.value
        setRecipient(value)

        if (isCardInput) {
            setCardType(CardType(value))
        }
    }

    const validateFields = () => {
        let isValid = true

        if (!recipient) {
            toast.error('Укажите номер получателя.')
            setRecipientError(true)
            isValid = false
        } else {
            setRecipientError(false)
        }

        if (!sum || parseFloat(sum) === 0) {
            toast.error('Укажите корректную сумму перевода.')
            setSumError(true)
            isValid = false
        } else {
            setSumError(false)
        }

        return isValid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateFields()) {
            try {
                await sendTransfer()
                setRecipient('')
                setSum('')
            } catch (error) {
                toast.error('Ошибка при отправке перевода')
                console.error('Ошибка при отправке перевода:', error)
            }
        }
    }

    const errorStyle = {
        marginBottom: '25px',
        borderColor: 'red',
        borderWidth: '2px',
        outline: 'none'
    }

    const styleInput = {
        marginBottom: '25px'
    }

    return (
        <div className={styles.wrapperContent}>
            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <div className={styles.formBody}>
                    <h2 className={styles.headLoginForm}>Новый перевод</h2>
                    <div className={styles.numCardTypeInput}>
                        <CustomInput
                            style={recipientError ? errorStyle : styleInput}
                            placeholder="Номер получателя"
                            value={recipient}
                            isCardInput={true}
                            handleInputChange={handleRecipientChange}
                        />
                        {cardType}
                    </div>
                    <CustomInput
                        style={sumError ? errorStyle : styleInput}
                        placeholder="Сумма перевода"
                        value={sum}
                        handleInputChange={(e) => setSum(e.target.value)}
                    />
                    <div className={styles.wrapperButton}>
                        <Button className={styles.buttonTranslation} type="submit"><span className={styles.svgMail}><img src={Mail} alt="Mail" /></span>Отправить</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
