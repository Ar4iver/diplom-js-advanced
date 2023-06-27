import React from 'react'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProviders/index.js'
import { AppRouter } from './providers/router'
import { AccountsProvider } from '../entities/accounts/lib/AccountsContext'

const App = () => {
    const { theme } = useTheme()
    return (
        <div className={`app ${theme}`}>
            <AccountsProvider>
                <AppRouter />
            </AccountsProvider>
        </div>
    )
}

export default App
