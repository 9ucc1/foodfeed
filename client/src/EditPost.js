import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from './context/user'
import {PostsContext} from './context/posts'
import {useParams, Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'

function EditPost(){

    const Background = styled.div`
    background: white;
    padding: 1em;
    padding-top: 80px;
    text-align: center;
    `

    // i only want to edit the caption, so don't submit the editPost

    const {user} = useContext(UserContext)
    const {posts, deletePost, patchPost} = useContext(PostsContext)
    const [editPost, setEditPost] = useState({image: "", post: {user_id: "", caption: ""}})
    const [errorsList, setErrorsList] = useState([])
    const params = useParams()
    const history = useHistory()

    useEffect(()=> {
        /*fetch(`/posts/${params.id}`)
        .then(r=>r.json())
        .then(post=>{
            setEditPost(post)
        })*/
        const ePost = posts.find(post=>post.id == params.id)
        setEditPost(ePost)
    }, [])
    console.log(editPost, user)

    function handleChange(e){
        //setEditPost(currentPost=>({...currentPost, post: {[e.target.name]: e.target.value}}))
        //console.log(e.target.name, e.target.value)
        // setting editPost.post.caption to e.target.value
        //setEditPost(currentPost=>({...currentPost, post: {...currentPost.post, [e.target.name]: e.target.value}}))
        setEditPost(currentPost => ({...currentPost, [e.target.name]: e.target.value}))
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
        .then(post=>{
            if (post.errors){
                const errorLis = post.errors.map(error => <li>{error}</li>)
                setErrorsList(errorLis)
            } else {
                //patch ur context whatever
                patchPost(post)
                alert("post updated!")
                history.push(`/posts`)
            }
        })
    }

    function handleDelete(){
        fetch(`/posts/${params.id}`,{
            method: "DELETE",
        })
        .then(r=> {
            if (r.ok){
                console.log(r)
                deletePost(params.id)
            }
        })
        alert("post deleted!")
        history.push(`/posts`)
    }

    /*if (!user || user.error || user.id != editPost.post.user_id){
        return <Background><h3>You're not authorized to edit this post.</h3></Background>
    } else {*/
        return(
            <>
            <Background></Background>
            <form onSubmit={handleSubmit}>
                <h4>Edit Post</h4>
                <img src={editPost.image_url}></img>
                <br/>
                <label>Caption text: </label>
                <input
                    type="text" name="caption"
                    value={editPost.caption}
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