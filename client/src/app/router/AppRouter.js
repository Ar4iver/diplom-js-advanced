import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import LoginPage from '../components/pages/LoginPage/LoginPage'
import AccountPage from '../components/pages/AccountPage/AccountPage'
import { AccountListPageAsync } from '../components/pages/AccountListPage/AccountListPage.async'
import { CurrencyExchangePageAsync } from '../components/pages/CurrencyExchangePage/CurrencyExchangePage.async'
import { MapPageAsync } from '../components/pages/MapPage/MapPage.async'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="/accounts" element={<AccountListPageAsync />} />
          <Route path="/account/:id" element={<AccountPage />} />
          <Route
            path="/currency-exchange"
            element={<CurrencyExchangePageAsync />}
          />
          <Route path="/atm-map" element={<MapPageAsync />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter
