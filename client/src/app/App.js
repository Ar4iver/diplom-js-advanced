import React, { useEffect } from 'react'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProviders/index.js'
import { AppRouter } from './providers/router'
import { useNavigate } from 'react-router-dom'

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
            <AppRouter />
        </div>
    )
}

export default App
