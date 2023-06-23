import React from 'react'
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import ReactDOM from 'react-dom/client'
import App from './app/App.js'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/providers/ThemeProviders/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
