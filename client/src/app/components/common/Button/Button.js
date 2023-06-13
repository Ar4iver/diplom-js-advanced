import React from 'react'
import styles from './style/button.module.css'

const Button = ({ title }) => {
  return <button className={styles.button}>{title}</button>
}

export default Button
