import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Navlist.module.scss'

const Navlist = () => {
    const links = [
        {
            name: 'Банкоматы',
            path: '/atm-map'
        },
        {
            name: 'Счета',
            path: '/accounts'
        },
        {
            name: 'Валюта',
            path: '/currency-exchange'
        }
    ]

    const location = useLocation()

    return (
        <div className={styles.wrapperLink}>
            {links.map((link, index) => (
                <NavLink
                    className={
                        location.pathname === link.path ? styles.active : styles.link
                    }
                    key={index}
                    to={link.path}
                >
                    {link.name}
                </NavLink>
            ))}
            <Link className={styles.logoutBtn} to={'/auth'}>
                Выйти
            </Link>
        </div>
    )
}

export default Navlist
