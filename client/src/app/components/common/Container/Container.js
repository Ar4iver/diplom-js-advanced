import React from 'react'
import style from './style/container.module.scss'

const MyContainer = ({ children }) => {
  return <div className={style.container}>{children}</div>
}

export default MyContainer
