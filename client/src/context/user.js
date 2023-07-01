import React, {useState, useEffect} from 'react'

const UserContext = React.createContext()

function UserProvider({children}){
    const [user, setUser] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch('/me')
        .then(r=>r.json())
        .then(r=>{
            setUser(r)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded){
        return(
            <p>Loading...</p>
        )
    }

    const login = (user)=>{
        setUser(user)
    }

    const logout = ()=>{
        setUser(null)
    }

    const signup = (user) => {
        setUser(user)
    }

    return (
        <UserContext.Provider value={{user, setUser, login, logout, signup}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}