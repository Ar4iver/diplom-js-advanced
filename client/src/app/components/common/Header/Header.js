import React from 'react'
import Container from '../Container/Container'
import Logo from '../../../assets/svg/logo.svg'
import styles from '../Header/style/header.module.scss'
import NavList from '../NavList/NavList'
import ThemeButton from '../ThemeButton/ThemeButton'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Link to={'/'}>
            <img src={Logo} alt="Logo" />
          </Link>
          <ThemeButton />
          <NavList />
        </div>
      </Container>
    </header>
  )
}

export default Header
