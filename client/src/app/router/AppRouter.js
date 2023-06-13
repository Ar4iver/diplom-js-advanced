import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import HomePage from '../components/pages/Home/HomePage'
import SignUpPage from '../components/pages/SignUpPage/SignUpPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
