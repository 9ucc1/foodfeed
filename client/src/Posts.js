import React, {useEffect, useState, useContext} from 'react'
import {PostsContext} from './context/posts'

function Posts(){

    //const [posts, setPosts] = useState({caption: "", image: ""})

    /*useEffect(()=>{
        fetch('/posts')
        .then(r=>r.json())
        .then(r=>setPosts(r))
    },[])
    console.log(posts)

    function renderPosts(){
        posts.map(post =>(
            <div>
            {post.caption}
            </div>
        ))
    }*/

    const {posts} = useContext(PostsContext)

    return(
        <>
        {posts.map(post=> (
            <>
            <div>{post.caption}</div>
            <img src={post.image_url}></img>
            </>
        ))}
        </>
    )
}

export default Posts