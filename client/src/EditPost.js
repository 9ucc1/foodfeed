import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from './context/user'
import {useParams, Link, useHistory} from 'react-router-dom'

function EditPost(){

    // i only want to edit the caption, so don't submit the editPost

    const {user} = useContext(UserContext)
    const [editPost, setEditPost] = useState({image: "", post: {user_id: ""}})
    //const [editCaption, setEditCaption] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const params = useParams()
    const history = useHistory()

    useEffect(()=> {
        fetch(`/posts/${params.id}`)
        .then(r=>r.json())
        .then(post=>{
            setEditPost(post)
        })
    }, [])
    console.log(editPost, user)

    function handleChange(e){
        //setEditPost(currentPost=>({...currentPost, post: {[e.target.name]: e.target.value}}))
        console.log(e.target.name, e.target.value)
        // setting editPost.post.caption to e.target.value
        setEditPost(currentPost=>({...currentPost, post: {...currentPost.post, [e.target.name]: e.target.value}}))
        console.log(editPost)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/posts/${params.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editPost)
        })
        .then(r=>r.json())
        .then(sighting=>{
            if (sighting.errors){
                const errorLis = sighting.errors.map(error => <li>{error}</li>)
                setErrorsList(errorLis)
            } else {
                //patchSighting(sighting)
                alert("sighting updated!")
            }
        })
    }

    function handleDelete(){
        console.log("delete")
    }

    /*if (!user || user.error || user.id != editPost.post.user_id){
        return <h3>You're not authorized to edit this post.</h3>
    } else {*/
        return(
            <>
            <form onSubmit={handleSubmit}>
                <h4>Edit Post</h4>
                <img src={editPost.image}></img>
                <br/>
                <label>Caption text: </label>
                <input
                    type="text" name="caption"
                    value={editPost.post.caption}
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">Save Post</button>
            </form>
            <button onClick={handleDelete}>Delete Post</button>
            {errorsList}
            <br/>
            <Link to={`/posts`}>Back to Posts</Link>
            </>
    )/*}*/
}

export default EditPost