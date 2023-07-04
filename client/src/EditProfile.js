import React, {useContext, useState} from 'react'
import {UserContext} from './context/user'

function EditProfile(){

    const {user} = useContext(UserContext)
    //console.log(user)
    const [profile, setProfile] = useState(user.profile)
    const [imageUpload, setImageUpload] = useState(user.profile.image)

    function handleChange(e){
        setProfile((currentProfileState)=>(
            {...currentProfileState, [e.target.name]: e.target.value}
        ))
    }

    function handleImage(e){
        console.log(e.target.files)
        setImageUpload(e.target.files)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(profile, imageUpload)
        //console.log(e.target.image.files)
        fetch(`/profiles/${profile.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "display_name": profile.display_name,
                    "bio": profile.bio,
                    "image": imageUpload
                }
            )
        })
        .then(r=>r.json())
        .then(profil=>{
            console.log(profil)
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
                //if left blank, revert to user.username
            />
        <br/>
        <label>User bio:</label>
            <textarea
                type="text" name="bio" value={profile.bio}
                onChange={handleChange}
            />
        <br/>
        <label>Avatar:</label>
        <input
          type="file"
          name="image"
          //multiple ref={imagesRef}
          className="file-upload"
          accept="image/png, image/jpeg, image/heic"
          onChange={handleImage}
        />
        <br/>
        <button type="submit">Save Changes</button>
        </form>
        </>
    )
}

export default EditProfile