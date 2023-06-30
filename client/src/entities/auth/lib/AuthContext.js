import React, { createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token')

    return (
        <AuthContext.Provider value={token}>
            {children}
        </AuthContext.Provider>
    )
}
