import React, { createContext, useEffect, useState } from 'react'

export const AccountsContext = createContext()

export const AccountsProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([])
    const [sortMethod, setSortMethod] = useState('balance')
    const [isLoading, setIsLoading] = useState(true)

    const fetchAccounts = async () => {
        setIsLoading(true)
        const response = await fetch('http://localhost:3000/accounts', {
            headers: {
                Authorization: `Basic ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json()

        setTimeout(() => {
            setAccounts(data.payload)
            setIsLoading(false)
        }, 1000)
    }

    useEffect(() => {
        fetchAccounts()
    }, [])

    return (
        <AccountsContext.Provider value={{ accounts, fetchAccounts, sortMethod, setSortMethod, isLoading }}>
            {children}
        </AccountsContext.Provider>
    )
}
