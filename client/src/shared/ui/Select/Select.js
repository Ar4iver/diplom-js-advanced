import React, { useState } from 'react'
import { useSelect } from 'shared/hooks'
import styles from './Select.module.scss'

const Select = (props) => {
  const { options } = props
  const { selected, handleSelect } = useSelect('Сортировка')

  return (
    <select className={styles.select} value={selected} onChange={handleSelect}>
      <option disabled>Сортировка</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
