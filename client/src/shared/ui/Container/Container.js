import React from 'react'
import styles from './Container.module.scss'

const MyContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default MyContainer
