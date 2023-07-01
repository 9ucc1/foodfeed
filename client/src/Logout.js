import React, {useContext} from 'react'
import {UserContext} from './context/user'

function Logout(){

    const {logout} = useContext(UserContext)

    function handleLogout(){
        fetch('/logout', {
            method: "DELETE"
        })
        .then(r=>{
            if (r.ok){
                logout()
                alert("You've been logged out!")
            }
        })
    }

    return(
        <>
        <button onClick={handleLogout}>Click to Confirm Logout</button>
        </>
    )
}

export default Logout