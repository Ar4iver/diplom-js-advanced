import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'app/layout'
import { AccountListPage } from 'pages/AccountListPage'
import { AccountPage } from 'pages/AccountPage'
import { LoginPage } from 'pages/LoginPage'
import { CurrencyExchangePage } from 'pages/CurrencyExchangePage'
import { MapPage } from 'pages/MapPage'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="/accounts" element={<AccountListPage />} />
          <Route path="/account/:id" element={<AccountPage />} />
          <Route path="/currency-exchange" element={<CurrencyExchangePage />} />
          <Route path="/atm-map" element={<MapPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter
