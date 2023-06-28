import React from 'react'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProviders/index.js'
import { AppRouter } from './providers/router'
import { AuthContext } from '../entities/auth'

const App = () => {
    const { theme } = useTheme()
    const token = localStorage.getItem('token')
    return (
        <div className={`app ${theme}`}>
            <AuthContext.Provider value={token}>
                <AppRouter />
            </AuthContext.Provider>
        </div>
    )
}

export default App
