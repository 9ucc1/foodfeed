import React, {useContext, useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {UserContext} from './context/user'


function Profile(){

    const params = useParams()
    const {user} = useContext(UserContext)
    const [profile, setProfile] = useState([])
    console.log(params)

    useEffect(()=>{
        fetch(`/profiles/${params.id}`)
        .then(r=>r.json())
        .then(r=>setProfile(r))
        console.log(profile)
    },[])

    return(
        <>
        <br/>
        {params.id==user.id ? <Link to={`/user/${user.id}/edit`}>
            Edit my profile
        </Link> : <div></div>}
        <div>
            avatar
            <img src={profile.image}/>
        </div>
        </>
    )
}

export default Profile