import React from 'react'
import Select from 'react-select'
import { CustomOption } from './config/CustomOption'
import { DropdownIndicator } from './config/DropdownIndicator'

const MySelect = ({ options, value, onChange, width }) => {
    const selectedOption = options.find(option => option.value === value)

    const handleChange = option => {
        onChange(option.value)
    }

    return (
        <div style={{ width: width || 'auto' }}>
            <Select
                options={options}
                value={selectedOption}
                onChange={handleChange}
                components={{ Option: CustomOption, DropdownIndicator }}
            />
        </div>
    )
}

export default MySelect
