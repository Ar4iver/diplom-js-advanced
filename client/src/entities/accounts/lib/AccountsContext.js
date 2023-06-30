import React, { createContext, useEffect, useState } from 'react'

export const AccountsContext = createContext()

export const AccountsProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/accounts', {
                headers: {
                    Authorization: `Basic ${localStorage.getItem('token')}`
                }
            })
            const data = await response.json()
            setAccounts(data)
        }
        fetchData()
    }, [])

    return (
        <AccountsContext.Provider value={accounts}>
            {children}
        </AccountsContext.Provider>
    )
}
