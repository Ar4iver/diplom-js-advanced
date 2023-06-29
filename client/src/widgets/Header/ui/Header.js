import React from 'react'
import styles from './Header.module.scss'
import MyContainer from '../../../shared/ui/Container/Container'
import { Navbar } from 'widgets/Navbar'
import AppLink from 'shared/ui/AppLink/AppLink'
import Logo from 'shared/assets/svg/logo.svg'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()

    return (
        <header className={styles.header}>
            <MyContainer>
                <div className={styles.headerContent}>
                    <AppLink>
                        <img src={Logo} alt="Logo" />
                    </AppLink>
                    {location.pathname !== '/auth'
                        ? <div className={styles.Navbar}>
                            <Navbar />
                        </div>
                        : null}
                </div>
            </MyContainer>
        </header>
    )
}

export default Header
