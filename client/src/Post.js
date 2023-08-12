import React, {useEffect, useState, useContext} from 'react'
import {UserContext} from './context/user'
import {PostsContext} from './context/posts'
import Comment from './Comment.js'
import {Link} from 'react-router-dom'

function Post({image_url, caption, post_id, user_id, comments}){

    const [postUser, setPostUser] = useState([])
    const [newComment, setNewComment] = useState("")
    const {user} = useContext(UserContext)
    const {addComment} = useContext(PostsContext)
    const [errorsList, setErrorsList] = useState("")

    useEffect(()=>{
        fetch(`/users/${user_id}`)
        .then(r=>r.json())
        .then(r=>setPostUser(r))
    }, [])

    function handleChange(e){
        setNewComment(e.target.value)
    }

    /*function handleSubmit(e){
        // refactor don't use formData
        e.preventDefault()
        const formData = new FormData();
        formData.append(`comment[text]`, newComment);
        formData.append(`comment[post_id]`, post_id);
        formData.append(`comment[user_id]`, user.id);
        submitData(formData)
        console.log(formData)
    }

    function submitData(formData){
        fetch(`/comments`,{
            method: "POST",
            body: formData
        })
        .then(r=>r.json())
        .then(r=>addComment(r))
    }*/

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            text: newComment,
            post_id: post_id,
            user_id: user.id
        }
        console.log(formData)
        fetch('/comments', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(comment=>{
            if (!comment.errors){
                addComment(comment)
                setNewComment("")
            } else {
                const errorLis = comment.errors.map(error =><li>{error}</li>)
                setErrorsList(errorLis)
            }
        })
    }

    /*function handleDelete(e){
        console.log("delete")
        fetch(`/posts/${post_id}`, {
            method: "DELETE",
        })
        .then(r=> {
            if (r.ok){
                console.log("deleted")
            }
        })
    }*/

    return(
        <>
            <img src={image_url}></img>
            <div>{postUser.username}: {caption}</div>
            {user.id === null || user.id != postUser.id ? <></> : <Link to={`/posts/${post_id}`}>Edit Post</Link>}
            <h4>Comments</h4>
            <div>{comments.map(comment => (
                <>
                    <Comment 
                    post_id={post_id}
                    comment_user_id={comment.user_id} 
                    comment_id={comment.id} 
                    text={comment.text}
                    timestamp={comment.timestamp}
                    comment_username={comment.username}
                    comment = {comment}
                    />
                </>
            ))}</div>
            {user === null || user.error ? (<p>Log in to join the conversation.</p>) :
            (<form onSubmit={handleSubmit}>
            <textarea
                type="text" name="text" value={newComment}
                onChange={handleChange}
            />
            <button type="submit">Post new comment</button>
            </form>)}
            {errorsList}
            <br/>
        </>
    )
}

export default Post