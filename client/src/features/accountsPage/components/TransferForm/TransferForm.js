import React from 'react'
import styles from './SendForm.module.scss'
import Button from 'shared/ui/Button/Button'
import CustomInput from 'shared/ui/Input/Input'
import Mail from '../../../../shared/assets/svg/mail.svg'

export const TransferForm = () => {
    return (
        <>
            <form
                className={styles.form}
            >
                <div className={styles.formBody}>
                    <h2 className={styles.headLoginForm}>Новый перевод</h2>
                    <CustomInput
                        placeholder="Номер получателя"
                    />
                    <CustomInput
                        placeholder="Сумма перевода"
                    />
                    <div className={styles.wrapperButton}>
                        <Button className={styles.buttonTranslation} type="submit"><span className={styles.svgMail}><img src={Mail} alt="Mail" /></span>Отправить</Button>
                    </div>
                </div>
            </form>
        </>
    )
}
