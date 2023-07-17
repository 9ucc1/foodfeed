import React from 'react'

function Comment({post_id, comment_id, user_id, text}){
    return(
        <>
        {text} {post_id} {comment_id} {user_id}
        </>
    )
}

export default Comment