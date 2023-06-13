import React from 'react'
import Container from '../Container/Container'
import Logo from '../../../assets/svg/logo.svg'
import styles from '../Header/style/header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <img src={Logo} alt="Logo" />
      </Container>
    </header>
  )
}

export default Header
