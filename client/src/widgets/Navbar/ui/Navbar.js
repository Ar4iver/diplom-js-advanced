import React from 'react'
import styles from './Navbar.module.scss'
import Navlist from '../../Navlist/ui/Navlist'
import { ThemeButton } from 'widgets/ThemeButton'

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ThemeButton />
            <Navlist />
        </div>
    )
}
