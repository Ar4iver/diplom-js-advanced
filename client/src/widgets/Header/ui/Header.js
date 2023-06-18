import React from 'react'
import styles from './Header.module.scss'
import MyContainer from '../../../shared/ui/Container/Container'
import { Navbar } from 'widgets/Navbar'

const Header = () => {
  return (
    <header className={styles.header}>
      <MyContainer>
        <Navbar />
      </MyContainer>
    </header>
  )
}

export default Header
