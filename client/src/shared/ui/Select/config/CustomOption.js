import React from 'react'
import { components } from 'react-select'
import Check from 'shared/assets/svg/check.svg'

export const CustomOption = ({ data, isSelected, ...props }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <components.Option {...props}>
            {data.label}
        </components.Option>
        {isSelected && <span style={{ position: 'absolute', right: '7px' }}><img src={Check} /></span>}
    </div>
)
