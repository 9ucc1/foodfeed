import React, {useState, useContext} from 'react'
import {UserContext} from './context/user'
import {useHistory} from 'react-router-dom'

function Signup(){

    const history = useHistory()
    const {signup} = useContext(UserContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])

    function handleSubmit(e){
        console.log(username, password, passwordConfirmation)
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
            })
        })
        .then(r=>r.json())
        .then(user=>{
            if (!user.errors){
                signup(user)
                alert("account created!")
                history.push('/')
            } else {
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
                const errorLis = user.errors.map(error=> <li>{error}</li>)
                setErrorsList(errorLis)
            }
        })
    }

    return (
        <>
        <div>Create a new account</div>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={e=>setUsername(e.target.value)}
            />
            <br/>
            <label>Password:</label>
            <input 
                type="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <br/>
            <label>Confirm Password:</label>
            <input 
                type="password"
                value={passwordConfirmation}
                onChange={e=>setPasswordConfirmation(e.target.value)}
            />
            <br/>
            <button type="submit">Sign Up</button>
        </form>
        {errorsList}
        </>
    )
}

export default Signup