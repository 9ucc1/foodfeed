import React, {useEffect, useState, useContext} from 'react'
import {PostsContext} from './context/posts'
import Comment from './Comment.js'
import Post from './Post.js'

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
    console.log(posts)

    return(
        <>
        {/*posts.map(post=> (
            <>
            <img src={post.image_url}></img>
            <div>{post.caption}</div>
            <div>comments: {post.comments.map(comment => (
                <>{comment.text}
                <Comment 
                    post_id={post.id} 
                    user_id={comment.user_id} 
                    comment_id={comment.id} 
                    text={comment.text}/>
                </>
            ))}</div>
            <div>Post a new comment</div>
            </>
            ))*/}
            <h2>Recent Posts</h2>
            <br/>
        {posts.map(post=> (
            <Post 
                image_url = {post.image_url}
                caption = {post.caption}
                post_id = {post.id}
                user_id = {post.user_id}
                comments = {post.comments}
            />
        ))}
        </>
    )
}

export default Posts