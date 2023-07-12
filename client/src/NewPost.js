import React, {useContext, useState} from 'react'
import {UserContext} from './context/user'

function NewPost(){

    const initialNewPost = {
        caption: "",
        image: []
    }

    const {user} = useContext(UserContext)
    const [newPost, setNewPost] = useState(initialNewPost)

    function handleChange(e){
        if(e.target.name === 'image'){
            setNewPost((currentPostState)=>(
                {...currentPostState, [e.target.name]: e.target.files[0]}
            ))
        } else {
            setNewPost((currentPostState)=>(
                {...currentPostState, [e.target.name]: e.target.value}
            ))
        }
    }


    function handleSubmit(e){
        e.preventDefault()
        console.log(newPost)
        const formData = new FormData();
        formData.append(`post[caption]`, newPost.caption);
        formData.append(`post[image]`, e.target.image.files[0]);
        formData.append(`post[user_id]`, user.id);
        submitData(formData)
    }
    // must submit with image

    function submitData(formData){
        fetch(`/posts`,{
            method: "POST",
            //headers: {"Content-Type": "application/json"},
            //headers: { 'content-type': 'multipart/form-data' },
            body: formData
        })
        .then(r=>r.json())
        .then(r=>console.log(r))
    }

    return(
        <>
        <div>new post</div>
        <form onSubmit={handleSubmit}>
        <label>Upload Image:</label>
        <input
          type="file"
          name="image"
          className="file-upload"
          accept="image/png, image/jpeg, image/heic"
          onChange={handleChange}
        />
        <br/>
        <label>Caption:</label>
            <textarea
                type="text" name="caption" value={newPost.caption}
                onChange={handleChange}
            />
        <br/>
        <button type="submit">Create Post</button>
        </form>
        </>
    )
}

export default NewPost