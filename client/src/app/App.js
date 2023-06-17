import React, { useContext } from 'react'
import AppRouter from './router/AppRouter.js'
import './styles/index.scss'
import { ThemeContext } from './theme/ThemeContext.js'

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  )
}

export default App
