import React, {useContext} from 'react'
import {UserContext} from './context/user'
import {PostsContext} from './context/posts'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Comment({post_id, comment_id, comment_username, comment_user_id, text, timestamp}){
    
    const Text = styled.div`
    max-width: 700px;
    `
    
    const Timestamp = styled.p`
    color: gray;
    text-align: right;
    font-size: 11px;
    `

    const {user} = useContext(UserContext)
    const {deleteComment} = useContext(PostsContext)

    function handleDelete(e){
        fetch(`/comments/${comment_id}`, {
            method: "DELETE",
        })
        .then(r=> {
            if (r.ok){
                deleteComment(comment_id, post_id)
            }
        })
    }

    return(
        <>
        <Text>
            <Link to={`/users/${comment_user_id}`}>{comment_username}</Link>: {text} 
            <Timestamp>
                {timestamp}
                {user === null || user.id === null || user.id !== comment_user_id ? <></> : <button onClick={handleDelete}>Delete</button> }
            </Timestamp>
        </Text>
        <br/>
        </>
    )
}

export default Comment