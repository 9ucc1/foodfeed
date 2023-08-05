import React, {useContext} from 'react'
import {UserContext} from './context/user'
import {Link} from 'react-router-dom'

function Comment({post_id, comment_id, comment_user_id, text, timestamp}){

    const {user} = useContext(UserContext)

    function handleDelete(e){
        console.log("delete")
        fetch(`/comments/${comment_id}`, {
            method: "DELETE",
        })
        .then(r=> {
            if (r.ok){
                console.log("deleted")
            }
        })
    }

    // using the comment user id, find the user's username and link to their profile

    return(
        <>
        {text} {post_id} {comment_id} <Link to={`/users/${comment_user_id}`}>link</Link> at {timestamp}
        {user.id == comment_user_id ? <button onClick={handleDelete}>Delete</button> : <></>}
        <br/>
        </>
    )
}

export default Comment