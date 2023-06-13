import React from 'react'
import Header from '../components/common/Header/Header'
import { Outlet } from 'react-router-dom'
import Container from '../components/common/Container/Container.js'

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
