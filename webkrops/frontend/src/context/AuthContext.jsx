import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
const Auth = createContext()
const AuthContext = ({ children }) => {
    const [user, setUser] = useState("ritam")
    return (
        <Auth.Provider value={{ user, setUser }}>
            {children}
        </Auth.Provider>
    )
}

export default AuthContext

export const UseAuth = () => useContext(Auth)
