import React, {useContext, useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {UserContext} from './context/user'
import {PostsContext} from './context/posts'
import Post from './Post.js'
import styled from 'styled-components'

function Profile(){

    const params = useParams()
    const {user} = useContext(UserContext)
    const {posts} = useContext(PostsContext)
    const [profile, setProfile] = useState({image: "", profile: {display_name: ""}})
    const profilePosts = posts.filter(post=>post.user_id == params.id)

    const Columns = styled.div`
    column-count: 2;
    text-align: left;
    width: 500px;
    `;

    const Background = styled.div`
    background: white;
    padding: 1em;
    padding-top: 80px;
    text-align: center;
    `

    const Avatar = styled.img`
    width: 100px;
    border: solid;
    `

    useEffect(()=>{
        fetch(`/profiles/${params.id}`)
        .then(r=>r.json())
        .then(r=>setProfile(r))
    },[params.id])
    console.log(profile)

    return(
        <Background>
        <br/>
        <Columns>
            <Avatar src={profile.image}/>
            <h2>{profile.profile.display_name}</h2>
            <div>{profile.profile.bio}</div>
            {user.id === null || params.id !=user.id ? <></> : <Link to={`/users/${user.id}/edit`}>
            Edit my profile</Link>}
        </Columns>
        <h3>{profile.profile.display_name}'s posts</h3>
        {profilePosts.length === 0 ? <h4>This user has no posts yet.</h4> :profilePosts.map(post=><Post 
            image_url = {post.image_url}
            caption = {post.caption}
            post_id = {post.id}
            user_id = {post.user_id}
            comments = {post.comments}
        />)}
        </Background>
    )
}

export default Profile