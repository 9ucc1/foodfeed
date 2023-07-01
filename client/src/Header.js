import React, {useContext} from 'react'
import {UserContext} from './context/user'
import {NavLink} from 'react-router-dom'

function Header(){

    const {user} = useContext(UserContext)

    const linkStyles = {
        display: "inline-block",
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "black",
        textDecoration: "none",
        color: "white",
      };

    return (
        <>
        {user === null || user.error ? (<p>you are not logged in</p>) : (<p>you are logged in as {user.username}</p>)}
        <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "beige",
                    color: "black",
                  }}
            >
                Home
        </NavLink>
        </>
    )
}

export default Header
