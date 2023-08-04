import React, { useEffect } from 'react'
import './styles/index.scss'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useTheme } from './providers/ThemeProviders/index.js'
import { AppRouter } from './providers/router'

const App = () => {
    const { theme } = useTheme()
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/auth')
        }
    }, [token])

    return (
        <div className={`app ${theme}`}>
            <ToastContainer />
            <AppRouter />
        </div>
    )
}

export default App
