import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
    const { children, className, ...otherProps } = props

    const combinedClassName = `${styles.button} ${className}`

    return (
        <button className={combinedClassName} {...otherProps}>
            {children}
        </button>
    )
}

export default Button
