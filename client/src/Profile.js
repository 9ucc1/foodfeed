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

    //useeffect stuff comes in late. can't directly input values as divs, find another way
    //image src is fine because it loads a second later.

    return(
        <>
        <br/>
        {params.id==user.id ? <Link to={`/user/${user.id}/edit`}>
            Edit my profile
        </Link> : <div>'s profile</div>}
        <div>'s profile</div>
        <div>
            display name:
            <div></div>
            avatar:
            <img src={profile.image}/>
            bio:
            <div></div>
        </div>
        </>
    )
}

export default Profile