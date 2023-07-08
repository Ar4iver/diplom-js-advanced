import React from 'react'
import { components } from 'react-select'
import ArrowBtnUp from 'shared/assets/svg/ArrowBtnUp.svg'
import ArrowBtnDown from 'shared/assets/svg/ArrowBtnDown.svg'

export const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? <span><img src={ArrowBtnDown} /></span> : <span><img src={ArrowBtnUp} /></span>}
    </components.DropdownIndicator>
)
