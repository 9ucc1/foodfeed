import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from './context/user'

function Logout(){

    const history = useHistory()
    const {logout} = useContext(UserContext)

    function handleLogout(){
        fetch('/logout', {
            method: "DELETE"
        })
        .then(r=>{
            if (r.ok){
                logout()
                alert("You've been logged out!")
                history.push('/')
            }
        })
    }

    return(
        <>
        <br/>
        <button onClick={handleLogout}>Click to Confirm Logout</button>
        </>
    )
}

export default Logout