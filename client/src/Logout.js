import React from 'react'

function Logout(){

    function handleLogout(){
        fetch('/logout', {
            method: "DELETE"
        })
        .then(r=>{
            if (r.ok){
                //logout()
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