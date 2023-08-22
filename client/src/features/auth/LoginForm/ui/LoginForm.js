import React, { useState, useContext } from 'react'
import styles from './LoginForm.module.scss'
import Button from 'shared/ui/Button/Button'
import CustomInput from 'shared/ui/Input/Input'
import { useNavigate } from 'react-router-dom'
import { AccountsContext } from 'entities/accounts'
import { AuthContext } from 'entities/auth'
import { toast } from 'react-toastify'

const LoginForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const { fetchAccounts } = useContext(AccountsContext)
    const { login: userAuth } = useContext(AuthContext)
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

            userAuth(data.payload.token)

            await fetchAccounts()

            navigate('/accounts')
            toast.success('Вход успешно выполнен!')
        } catch (error) {
            toast.error('Во время авторизации произошла ошибка.')
            console.log(error)
        }
    }

    const styleInput = {
        marginBottom: '25px'
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
                    <span>Вводить ничего не нужно, просто кликните на кнопку: <strong>Войти</strong></span>
                    <CustomInput
                        style={styleInput}
                        placeholder="Логин"
                        value={login}
                        handleInputChange={(e) => setLogin(e.target.value)}
                    />
                    <CustomInput
                        style={styleInput}
                        placeholder="Пароль"
                        type="password"
                        value={password}
                        handleInputChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.wrapperButton}>
                        <Button id="submit" type="submit">Войти</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginForm
