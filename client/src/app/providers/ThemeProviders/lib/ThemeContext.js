import { createContext } from 'react'

export const Theme = {
    LIGHT: 'light',
    DARK: 'dark'
}

export const ThemeContext = createContext({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
