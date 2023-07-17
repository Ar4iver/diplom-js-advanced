import React from 'react'
import styles from './signup.module.scss'
import { LoginForm } from 'features/auth/LoginForm'

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    )
}

export default LoginPage
