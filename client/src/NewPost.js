import React, {useContext, useState} from 'react'
import {UserContext} from './context/user'

function NewPost(){

    const initialNewPost = {
        caption: ""
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
        <button type="submit">Save Changes</button>
        </form>
        </>
    )
}

export default NewPost