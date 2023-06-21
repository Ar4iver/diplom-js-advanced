import React from 'react'
import { useParams } from 'react-router-dom'

export const AccountDetailPage = () => {
  const { accountNumber } = useParams()

  console.log(accountNumber)
  return (
    <div>
      <h1>Страница счёта</h1>
    </div>
  )
}
