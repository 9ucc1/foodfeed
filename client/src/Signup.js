import React, {useState} from 'react'

function Signup(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSubmit(e){
        console.log("submit")
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(r=>r.json())
        .then(console.log("user created"))
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
        </>
    )
}

export default Signup