import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'widgets/Header'
import MyContainer from 'shared/ui/Container/Container'

const Layout = () => {
    return (
        <>
            <Header />
            <MyContainer>
                <Outlet />
            </MyContainer>
        </>
    )
}

export default Layout
