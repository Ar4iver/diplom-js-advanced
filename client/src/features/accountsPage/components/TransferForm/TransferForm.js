import React, { useState } from 'react'
import styles from './SendForm.module.scss'
import Button from 'shared/ui/Button/Button'
import CustomInput from 'shared/ui/Input/Input'
import Mail from 'shared/assets/svg/mail.svg'
import { transferFunds } from '../../../transferFunds'

export const TransferForm = (props) => {
    const { accountNumber } = props

    const [recipient, setRecipient] = useState('')
    const [sum, setSum] = useState('')

    const sendTransfer = async () => {
        await transferFunds(accountNumber, recipient, sum)
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
                    <CustomInput
                        placeholder="Номер получателя"
                        value={recipient}
                        handleInputChange={(e) => setRecipient(e.target.value)}
                    />
                    <CustomInput
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
TransferForm.displayName = 'TransferForm'
