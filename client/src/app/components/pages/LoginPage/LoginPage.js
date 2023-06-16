import React from 'react'
import LoginForm from '../../ui/forms/LoginForm.js'
import styles from './style/signup.module.scss'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}

export default LoginPage
