import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from './context/user'
import {useParams, Link} from 'react-router-dom'

function EditPost(){

    const {user} = useContext(UserContext)
    const [editPost, setEditPost] = useState({image: "", post: {user_id: ""}})
    const [errorsList, setErrorsList] = useState([])
    const params = useParams()

    useEffect(()=> {
        fetch(`/posts/${params.id}`)
        .then(r=>r.json())
        .then(post=> setEditPost(post))
    }, [])
    console.log(editPost, user)

    function handleChange(e){
        console.log(e)
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    function handleDelete(){
        console.log("delete")
    }

    if (!user || user.error || user.id != editPost.post.user_id){
        return <h3>You're not authorized to edit this post.</h3>
    } else {
        return(
            <>
            <form onSubmit={handleSubmit}>
                <h4>Edit Post</h4>
                <img src={editPost.image}></img>
                <br/>
                <label>Caption text: </label>
                <input
                    type="text" name="date"
                    value={editPost.post.caption}
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">Save Post</button>
                <button onClick={handleDelete}>Delete Post</button>
            </form>
            {errorsList}
            <Link to={`/posts`}>Back to Posts</Link>
            </>
    )}
}

export default EditPost