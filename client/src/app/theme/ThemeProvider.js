import React, { useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from './ThemeContext'

const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
const defaultTheme = storedTheme === 'DARK' ? Theme.DARK : Theme.LIGHT

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

///Провайдер в данном случае нужен для получения глобального доступа с любого компонента к темам.
