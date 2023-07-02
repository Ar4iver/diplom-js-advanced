import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AppLink.module.scss'

const AppLink = (props) => {
    const { to, children, className, ...otherProps } = props

    const combinedClassName = `${styles.link} ${className}`

    return (
        <Link className={combinedClassName} to={to} {...otherProps}>
            {children}
        </Link>
    )
}

export default AppLink
