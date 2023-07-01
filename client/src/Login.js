import React, {useState} from 'react'

function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log("submit login")
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(r=>r.json())
        .then(r=>console.log(r))
    }

    return(
        <>
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
        </>
    )
}

export default Login