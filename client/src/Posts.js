import React, {useContext} from 'react'
import {PostsContext} from './context/posts'
import Post from './Post.js'
import styled from 'styled-components'

function Posts(){

    const Background = styled.div`
    background: white;
    padding: 1em;
    padding-top: 80px;
    padding-bottom: 80px;
    text-align: center;
    `

    const {posts} = useContext(PostsContext)

    return(
        <Background>
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
        </Background>
    )
}

export default Posts