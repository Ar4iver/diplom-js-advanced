import React from 'react'
import styles from './Input.module.scss'

const CustomInput = ({ options, placeholder, value, handleInputChange }) => {
    return (
        <div>
            {options
                ? (
                    <select value={value} onChange={handleInputChange}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )
                : (
                    <input className={styles.input} type="text" placeholder={placeholder} />
                )}
        </div>
    )
}

export default CustomInput
