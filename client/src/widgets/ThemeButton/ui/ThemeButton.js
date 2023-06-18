import React from 'react'
import styles from './ThemeButton.module.scss'
import { useTheme, Theme } from 'app/providers/ThemeProviders'

const ThemeButton = () => {
  const { theme, toogleTheme } = useTheme()
  return (
    <button className={styles.button} onClick={toogleTheme}>
      {theme === Theme.DARK ? 'Светлая тема' : 'Тёмная тема'}
    </button>
  )
}

export default ThemeButton
