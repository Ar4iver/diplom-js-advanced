import React from 'react'
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import ReactDOM from 'react-dom/client'
import App from './app/App.js'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/providers/ThemeProviders/index.js'
import { AccountsProvider } from 'entities/accounts/lib/AccountsContext'
import { AuthProvider } from 'entities/auth/lib/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <AccountsProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </AccountsProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)
