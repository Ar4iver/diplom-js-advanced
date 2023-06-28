import React, { useState } from 'react'
import styles from './LoginForm.module.scss'
import Button from '../../../../shared/ui/Button/Button'
import CustomInput from '../../../../shared/ui/Input/Input'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const auth = async () => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login: 'developer', password: 'skillbox' })
            })

            const data = await response.json()

            localStorage.setItem('token', data.payload.token)

            navigate('/accounts')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault()
                    auth()
                }}
            >
                <div className={styles.formBody}>
                    <h2 className={styles.headLoginForm}>Вход в аккаунт</h2>
                    <CustomInput
                        placeholder="Логин"
                        value={login}
                        handleInputChange={(e) => setLogin(e.target.value)}
                    />
                    <CustomInput
                        placeholder="Пароль"
                        type="password"
                        value={password}
                        handleInputChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.wrapperButton}>
                        <Button type="submit">Войти</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginForm
