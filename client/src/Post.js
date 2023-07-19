import React, {useEffect, useState, useContext} from 'react'
import {UserContext} from './context/user'
import Comment from './Comment.js'

function Post({image_url, caption, post_id, user_id, comments}){

    const [postUser, setPostUser] = useState([])
    const [newComment, setNewComment] = useState("")
    const {user} = useContext(UserContext)

    useEffect(()=>{
        fetch(`/users/${user_id}`)
        .then(r=>r.json())
        .then(r=>setPostUser(r))
    }, [])
    //console.log(postUser)

    function handleChange(e){
        setNewComment(e.target.value)
    }

    /*function handleSubmit(e){
        e.preventDefault()
        //console.log(newComment, post_id, user_id, user.id)
        const formData = {
            text: newComment,
            post_id: post_id,
            user_id: user.id
        }
        console.log(formData)
        fetch('/comments', {
            method: "POST",
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(r=>console.log(r))
    }*/

    function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append(`comment[text]`, newComment);
        formData.append(`comment[post_id]`, post_id);
        formData.append(`comment[user_id]`, user.id);
        submitData(formData)
    }

    function submitData(formData){
        fetch(`/comments`,{
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
            <img src={image_url}></img>
            <div>{postUser.username}: {caption}</div>
            <div>Comments</div>
            <div>{comments.map(comment => (
                <>
                    <Comment 
                    post_id={post_id} 
                    comment_user={comment.user_id} 
                    comment_id={comment.id} 
                    text={comment.text}
                    />
                </>
            ))}</div>
            <form onSubmit={handleSubmit}>
            <textarea
                type="text" name="new_comment" value={newComment}
                onChange={handleChange}
            />
            <button type="submit">Post new comment</button>
            </form>
            <br/>
        </>
    )
}

export default Post