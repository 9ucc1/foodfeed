import React, {useContext} from 'react'
import {UserContext} from './context/user'

function Comment({post_id, comment_id, comment_user, text}){

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

    return(
        <>
        {text} {post_id} {comment_id} {comment_user} 
        {user.id == comment_user ? <button onClick={handleDelete}>Delete</button> : <></>}
        <br/>
        </>
    )
}

export default Comment