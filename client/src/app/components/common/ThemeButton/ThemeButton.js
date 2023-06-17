import React, { useContext } from 'react'
import styles from './style/themeButton.module.scss'
import { useTheme } from '../../../theme/useTheme'
import { Theme } from '../../../theme/ThemeContext'

const ThemeButton = () => {
  const { theme, toogleTheme } = useTheme()
  return (
    <button onClick={toogleTheme}>
      {theme === Theme.DARK ? 'Светлая тема' : 'Тёмная тема'}
    </button>
  )
}

export default ThemeButton
