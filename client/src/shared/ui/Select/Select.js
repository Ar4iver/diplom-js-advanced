import React from 'react'
import Select from 'react-select'
import { customStyles } from './style/customStyles'
import { CustomOption } from './config/CustomOption'
import { DropdownIndicator } from './config/DropdownIndicator'

const MySelect = ({ options, value, onChange }) => {
    const selectedOption = options.find(option => option.value === value)

    const handleChange = option => {
        onChange(option.value)
    }

    return (
        <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            components={{ Option: CustomOption, DropdownIndicator }}
            styles={customStyles}
        />
    )
}

export default MySelect
