import React, {useContext, useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {UserContext} from './context/user'


function Profile(){

    const params = useParams()
    const {user} = useContext(UserContext)
    const [profile, setProfile] = useState({image: "", profile: {display_name: ""}})
    console.log(params)

    useEffect(()=>{
        fetch(`/profiles/${params.id}`)
        .then(r=>r.json())
        .then(r=>setProfile(r))
    },[])
    console.log(profile)

    return(
        <>
        <br/>
        {params.id==user.id ? <Link to={`/users/${user.id}/edit`}>
            Edit my profile
        </Link> : <div></div>}
        <div>
            <img src={profile.image}/>
            <h3>{profile.profile.display_name}</h3>
            <div>{profile.profile.bio}</div>
        </div>
        </>
    )
}

export default Profile