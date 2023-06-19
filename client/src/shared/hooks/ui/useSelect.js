import React, { useState } from 'react'

export const useSelect = (defaultValue) => {
  const [selected, setSelected] = useState(defaultValue)

  function handleSelect(e) {
    setSelected(e.target.value)
  }

  console.log(selected)

  return {
    selected,
    handleSelect,
  }
}
