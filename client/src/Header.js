import React, {useContext} from 'react'
import {UserContext} from './context/user'
import {NavLink, Link} from 'react-router-dom'

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
        <h2>FOODFEED</h2>
        {user === null || user.error ? (<p>you are not logged in</p>) : (<p>you are logged in as <Link to={`/user/${user.id}`}>{user.username}</Link></p>)}
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
        { user === null || user.error ? (<>
            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "beige",
                    color: "black",
                  }}
            >
                Log In
            </NavLink>
            <NavLink
                to="/signup"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "beige",
                    color: "black",
                  }}
            >
                Sign Up
        </NavLink>
         </>)
         :
            (<>
            <NavLink
                    to="/posts/new"
                    exact
                    style={linkStyles}
                    activeStyle={{
                        background: "beige",
                        color: "black",
                      }}
                >
                    New Post
            </NavLink>
            <NavLink
                    to="/posts"
                    exact
                    style={linkStyles}
                    activeStyle={{
                        background: "beige",
                        color: "black",
                      }}
                >
                    Feed
            </NavLink>
            <NavLink
                    to="/logout"
                    exact
                    style={linkStyles}
                    activeStyle={{
                        background: "beige",
                        color: "black",
                      }}
                >
                    Log Out
            </NavLink>
            </>)
         }
        </>
    )
}

export default Header
