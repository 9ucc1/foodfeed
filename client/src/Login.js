import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from './context/user'
import styled from 'styled-components'

function Login(){

    const Background = styled.div`
    background: white;
    padding: 1em;
    padding-top: 100px;
    text-align: center;
    `

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorsList, setErrorsList] = useState("")
    const {login} = useContext(UserContext)
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(r=>r.json())
        .then(r=>{
            if (!r.error){
                login(r)
                history.push('/')
            } else {
                setErrorsList(r.error)
                setUsername("")
                setPassword("")
            }
        })
    }

    return(
        <>
        <Background/>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={e=>setUsername(e.target.value)}
            />
            <br/>
            <label>Password:</label>
            <input 
                type="password"
                id="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <br/>
            <button type="submit">Log In</button>
        </form>
        {errorsList}
        </>
    )
}

export default Login