import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from './context/user'

function Profile(){

    const {user} = useContext(UserContext)

    return(
        <>
        <br/>
        <Link to={`/profile/${user.id}/edit`}>
            Edit my profile
        </Link>
        view my posts
        </>
    )
}

export default Profile