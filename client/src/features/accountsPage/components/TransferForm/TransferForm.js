import React from 'react'
import styles from './SendForm.module.scss'
import Button from 'shared/ui/Button/Button'
import CustomInput from 'shared/ui/Input/Input'

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
                        <Button type="submit">Отправить</Button>
                    </div>
                </div>
            </form>
        </>
    )
}
