import React, {useContext} from 'react'
import {UserContext} from './context/user'

function EditProfile(){

    const {user} = useContext(UserContext)

    return(
        <>
        <div>editprofile</div>
        <form>
            <label>Your username: {user.username}</label>
            <label></label>
        </form>
        </>
    )
}

export default EditProfile