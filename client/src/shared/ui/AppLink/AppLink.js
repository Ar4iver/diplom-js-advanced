import React from 'react'
import { Link } from 'react-router-dom'

const AppLink = (props) => {
  const { to, children, className, ...otherProps } = props

  return (
    <Link className={className} to={to} {...otherProps}>
      {children}
    </Link>
  )
}

export default AppLink
