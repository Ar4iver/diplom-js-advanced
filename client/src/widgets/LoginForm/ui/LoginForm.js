import React from 'react'
import styles from './LoginForm.module.scss'
import Button from '../../../shared/ui/Button/Button.js'
import CustomInput from '../../../shared/ui/Input/Input'

const LoginForm = () => {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.formBody}>
          <h2 className={styles.headLoginForm}>Вход в аккаунт</h2>
          <CustomInput placeholder="Логин" />
          <CustomInput placeholder="Пароль" />
          <div className={styles.wrapperButton}>
            <Button>Войти</Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginForm
