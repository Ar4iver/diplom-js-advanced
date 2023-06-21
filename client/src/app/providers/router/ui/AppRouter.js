import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'app/layout'
import { AccountListPage } from 'pages/AccountListPage'
import { LoginPage } from 'pages/LoginPage'
import { CurrencyExchangePage } from 'pages/CurrencyExchangePage'
import { MapPage } from 'pages/MapPage'
import { AccountDetailPage } from 'pages/AccountDetailPage'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="/accounts" element={<AccountListPage />} />
          <Route path="/accounts/:accountNumber" element={<AccountDetailPage />} />
          <Route path="/currency-exchange" element={<CurrencyExchangePage />} />
          <Route path="/atm-map" element={<MapPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter
