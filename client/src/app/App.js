import React from 'react'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProviders/index.js'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme } = useTheme()
  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  )
}

export default App
