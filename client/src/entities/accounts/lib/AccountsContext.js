import React, { createContext, useEffect, useState } from 'react'

export const AccountsContext = createContext()

export const AccountsProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        const response = fetch('http://localhost:3000/accounts', {
            headers: {
                Authorization: `Basic ${localStorage.getItem('token')}`
            }
        })
        const data = response.json()
        setAccounts(data)
    }, [])

    return (
        <AccountsContext.Provider value={accounts}>
            {children}
        </AccountsContext.Provider>
    )
}
