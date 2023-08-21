import React, { useState } from 'react'
import { FaCcMastercard } from 'react-icons/fa'
import { LiaCcVisa } from 'react-icons/lia'
import styles from './SendForm.module.scss'
import Button from 'shared/ui/Button/Button'
import CustomInput from 'shared/ui/Input/Input'
import Mail from 'shared/assets/svg/mail.svg'
import { transferFunds } from '../../../transferFunds'

export const TransferForm = (props) => {
    const { accountNumber } = props
    const [recipient, setRecipient] = useState('')
    const [sum, setSum] = useState('')
    const [cardType, setCardType] = useState('')

    const sendTransfer = async () => {
        await transferFunds(accountNumber, recipient, sum)
    }

    const determineCardType = (number) => {
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
            setCardType(determineCardType(value))
        }
    }

    const styleInput = {
        marginBottom: '25px'
    }

    return (
        <div className={styles.wrapperContent}>
            <form
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault()
                    sendTransfer()
                }}
            >
                <div className={styles.formBody}>
                    <h2 className={styles.headLoginForm}>Новый перевод</h2>
                    <div className={styles.numCardTypeInput}>
                        <CustomInput
                            style={styleInput}
                            placeholder="Номер получателя"
                            value={recipient}
                            isCardInput={true}
                            handleInputChange={handleRecipientChange}
                        />
                        {cardType}
                    </div>
                    <CustomInput
                        style={styleInput}
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
