import React, {useEffect, useState, useContext} from 'react'
import {UserContext} from './context/user'
import {PostsContext} from './context/posts'
import Comment from './Comment.js'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Post({image_url, caption, post_id, user_id, comments, timestamp}){

    const Text = styled.div`
    max-width: 700px;
    font-weight: 600;
    `
    
    const Timestamp = styled.p`
    color: gray;
    text-align: right;
    font-size: 11px;
    `

    const Avatar = styled.img`
    width: 35px;
    border: none;
    `

    const [postUser, setPostUser] = useState({id: "", profile: {image_url: ""}})
    const [newComment, setNewComment] = useState("")
    const {user} = useContext(UserContext)
    const {addComment} = useContext(PostsContext)
    const [errorsList, setErrorsList] = useState("")
    console.log(postUser)

    useEffect(()=>{
        fetch(`/users/${user_id}`)
        .then(r=>r.json())
        .then(r=>setPostUser(r))
    }, [])

    function handleChange(e){
        setNewComment(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            text: newComment,
            post_id: post_id,
            user_id: user.id
        }
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

    return(
        <>
            <img src={image_url}></img> <br/>
            {user === null || user.id === null || user.id === undefined || user.id != postUser.id ? <></> : <button><Link to={`/posts/${post_id}`}>Edit Post</Link></button>}
            <Text>
            <Avatar src={postUser.profile.image_url}/>
                <Link to={`/users/${postUser.id}`}>{postUser.username}</Link>: {caption} <Timestamp>{timestamp}</Timestamp>
            </Text>
            <h3>Comments</h3>
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