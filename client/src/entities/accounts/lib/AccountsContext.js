import React, { createContext, useEffect, useState } from 'react'

export const AccountsContext = createContext()

export const AccountsProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: 'developer', password: 'skillbox' })
        })
            .then(response => response.json())
            .then(data => {
                const token = data.token
                return fetch('http://localhost:3000/accounts', {
                    headers: {
                        Authorization: `Basic ${token}`
                    }
                })
            })
            .then(response => response.json())
            .then(data => setAccounts(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <AccountsContext.Provider value={accounts}>
            {children}
        </AccountsContext.Provider>
    )
}
