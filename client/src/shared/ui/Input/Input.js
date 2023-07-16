import React from 'react'
import styles from './Input.module.scss'

const CustomInput = (props) => {
    const { placeholder, className, handleInputChange, style } = props

    const combinedClassName = `${styles.input} ${className}`

    return (
        <div style={style}>
            <input className={combinedClassName} onChange={handleInputChange} type="text" placeholder={placeholder}/>
        </div>
    )
}

export default CustomInput
