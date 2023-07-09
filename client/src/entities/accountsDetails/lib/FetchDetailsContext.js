import React, { createContext, useState } from 'react'

export const AccountDetailsContext = createContext()

export const AccountDetailsProvider = ({ children }) => {
    const [accountDetails, setAccountDetails] = useState(null)

    const fetchAccountDetails = async (accountNumber) => {
        const response = await fetch(`http://localhost:3000/account/${accountNumber}`, {
            headers: {
                Authorization: `Basic ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json()

        setAccountDetails(data.payload)
    }

    return (
        <AccountDetailsContext.Provider value={{ accountDetails, fetchAccountDetails }}>
            {children}
        </AccountDetailsContext.Provider>
    )
}
