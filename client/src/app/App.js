import React from 'react'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProviders/index.js'
import { AppRouter } from './providers/router'
import { AuthProvider } from '../entities/auth/lib/AuthContext'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </div>
    )
}

export default App
