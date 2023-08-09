import React, {useContext} from 'react'
import {UserContext} from './context/user'
import {PostsContext} from './context/posts'
import {Link} from 'react-router-dom'

function Comment({post_id, comment_id, comment_username, comment_user_id, text, timestamp, comment}){

    const {user} = useContext(UserContext)
    const {deleteComment} = useContext(PostsContext)

    function handleDelete(e){
        console.log("delete")
        fetch(`/comments/${comment_id}`, {
            method: "DELETE",
        })
        .then(r=> {
            if (r.ok){
                console.log("deleted")
                deleteComment(comment_id, post_id)
            }
        })
    }

    // using the comment user id, find the user's username and link to their profile

    return(
        <>
        <Link to={`/users/${comment_user_id}`}>{comment_username}</Link>: {text} at {timestamp}
        {user.id == comment_user_id ? <button onClick={handleDelete}>Delete</button> : <></>}
        <br/>
        </>
    )
}

export default Comment