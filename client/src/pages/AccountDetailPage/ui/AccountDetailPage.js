import React from 'react'
import { useParams } from 'react-router-dom'

export const AccountDetailPage = () => {
  const { accountNumber } = useParams()

  return (
    <div>
      <h1>Страница счёта {accountNumber}</h1>
    </div>
  )
}
