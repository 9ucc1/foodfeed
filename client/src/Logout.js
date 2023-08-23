import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from './context/user'
import styled from 'styled-components'

function Logout(){

    const Background = styled.div`
    background: white;
    padding: 1em;
    padding-top: 80px;
    padding-bottom: 80px;
    text-align: center;
    `

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
        <Background>
        <br/>
        <button onClick={handleLogout}>Click to Confirm Logout</button>
        </Background>
    )
}

export default Logout