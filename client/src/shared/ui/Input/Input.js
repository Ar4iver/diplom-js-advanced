import React from 'react'
import styles from './Input.module.scss'

const CustomInput = (props) => {
    const { placeholder, className, handleInputChange, isCardInput, style } = props

    const combinedClassName = `${styles.input} ${className}`

    const handleChange = (e) => {
        handleInputChange(e, isCardInput)
    }

    return (
        <div style={style}>
            <input className={combinedClassName} onChange={handleChange} type="text" placeholder={placeholder}/>
        </div>
    )
}

export default CustomInput
