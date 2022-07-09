import React from 'react'

// create a context
const AuthContext = React.createContext(null);

export const AuthProvider = ({children}) => {

    const [user, setUser] = React.useState(null);

    const login = () => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user,login,logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => { 
    return React.useContext(AuthContext)
}