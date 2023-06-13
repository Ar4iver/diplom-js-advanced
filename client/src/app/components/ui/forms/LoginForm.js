import React from 'react'
import Button from '../../common/Button/Button'
import CustomInput from '../../common/Input/Input.js'
import styles from '../forms/style/loginForm.module.css'

const LoginForm = () => {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.formBody}>
          <h2 className={styles.headLoginForm}>Вход в аккаунт</h2>
          <CustomInput placeholder="Логин" />
          <CustomInput placeholder="Пароль" />
          <div className={styles.wrapperButton}>
            <Button title="Войти" />
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginForm
