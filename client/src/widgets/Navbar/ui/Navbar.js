import React from 'react'
import styles from './Navbar.module.scss'
import Navlist from '../../Navlist/ui/Navlist'

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Navlist />
        </div>
    )
}
