import React from 'react'
import styles from './Input.module.scss'

const CustomInput = (props) => {
    const { placeholder, className, handleInputChange, isCardInput, style, value } = props

    const combinedClassName = `${styles.input} ${className}`

    const handleChange = (e) => {
        handleInputChange(e, isCardInput)
    }

    return (
        <div>
            <input
                style={style}
                className={combinedClassName}
                onChange={handleChange}
                value={value}
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}

export default CustomInput
