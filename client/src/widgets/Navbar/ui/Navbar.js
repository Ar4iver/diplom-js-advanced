import React from 'react'
import styles from './Navbar.module.scss'
import Navlist from '../../Navlist/ui/Navlist'
import Logo from 'shared/assets/svg/logo.svg'
import { ThemeButton } from 'widgets/ThemeButton'
import AppLink from 'shared/ui/AppLink/AppLink'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <AppLink to={'/'}>
        <img src={Logo} alt="Logo" />
      </AppLink>
      <ThemeButton />
      <Navlist />
    </div>
  )
}
