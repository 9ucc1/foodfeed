import React, {useContext, useState} from 'react'
import {UserContext} from './context/user'
import {useHistory} from 'react-router-dom'

function EditProfile(){

    const {user} = useContext(UserContext)
    const [profile, setProfile] = useState(user.profile)
    const [errorsList, setErrorsList] = useState("")
    const history = useHistory()

    function handleChange(e){
        if(e.target.name === 'image'){
            setProfile((currentProfileState)=>(
                {...currentProfileState, [e.target.name]: e.target.files[0]}
            ))
        } else {
            setProfile((currentProfileState)=>(
                {...currentProfileState, [e.target.name]: e.target.value}
            ))
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if(e.target.image.files[0] == undefined){
            setErrorsList("please upload an avatar!")
        } else {
        console.log(profile, e.target.image.files[0])
        const formData = new FormData();
        formData.append(`profile[display_name]`, profile.display_name);
        formData.append(`profile[bio]`, profile.bio);
        formData.append(`profile[image]`, e.target.image.files[0])
        submitData(formData)
    }}

    function submitData(formData){
        fetch(`/profiles/${profile.id}`,{
            method: "PATCH",
            body: formData
        })
        .then(r=>r.json())
        .then(r=>{
            setProfile(r)
            alert("profile changes saved!")
            history.push(`/users/${user.id}`)
        })
    }

    return(
        <>
        <div>editprofile</div>
        <form onSubmit={handleSubmit}>
        <label>Your username: {user.username}</label>
        <br/>
        <label>Display name:</label>
            <input 
                type="text" name="display_name" value={profile.display_name}
                onChange={handleChange}
            />
        <br/>
        <label>User bio:</label>
            <textarea
                type="text" name="bio" value={profile.bio}
                onChange={handleChange}
            />
        <br/>
        <label>Upload New Avatar:</label>
        <input
          type="file"
          name="image"
          className="file-upload"
          accept="image/png, image/jpeg, image/heic"
          onChange={handleChange}
        />
        <br/>
        <button type="submit">Save Changes</button>
        </form>
        {errorsList}
        </>
    )
}

export default EditProfile