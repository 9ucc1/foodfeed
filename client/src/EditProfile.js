import React, {useContext, useState} from 'react'
import {UserContext} from './context/user'
import { DirectUpload } from 'activestorage';

function EditProfile(){

    const {user} = useContext(UserContext)
    //console.log(user)
    const [profile, setProfile] = useState(user.profile)
    

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
       // console.log(profile)
        const formData = new FormData();
        formData.append(`profile[display_name]`, profile.display_name);
        formData.append(`profile[bio]`, profile.bio);
        formData.append(`profile[image]`, e.target.image.files[0])
        submitData(formData)
    }

    function submitData(formData){
        fetch(`/profiles/${profile.id}`,{
            method: "PATCH",
            //headers: {"Content-Type": "application/json"},
            //headers: { 'content-type': 'multipart/form-data' },
            body: formData
        })
        .then(r=>r.json())
        .then(r=>console.log(r))
    }

    /*function handleSubmit(e){
        e.preventDefault()
        //console.log(profile)
        fetch(`/profiles/${profile.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "display_name": profile.display_name,
                    "bio": profile.bio,
                    "image": e.target.image.files[0]
                }
            ) //JSON.stringify(profile),
        })
        .then(r=>r.json())
        .then(profile=>{
            console.log(profile)
            //console.log(e.target.image.files[0])
            //uploadFile(e.target.image.files[0], profile)
        })
    }
    function uploadFile(file, user){
        const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
        upload.create((error, blob) => {
            if (error){
                console.log(error)
            } else {
                console.log("no error")
            }
        })
    }*/

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
          onChange={handleChange}
        />
        <br/>
        <button type="submit">Save Changes</button>
        </form>
        </>
    )
}

export default EditProfile