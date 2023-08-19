import React, {useContext, useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {UserContext} from './context/user'
import {PostsContext} from './context/posts'
import Post from './Post.js'


function Profile(){

    const params = useParams()
    const {user} = useContext(UserContext)
    const {posts} = useContext(PostsContext)
    const [profile, setProfile] = useState({image: "", profile: {display_name: ""}})
    //console.log(params)

    useEffect(()=>{
        //fetch(`/profiles/${params.id}`)
        fetch(`/profiles/${params.id}`)
        .then(r=>r.json())
        .then(r=>setProfile(r))
    },[])
    console.log(profile)

    /*function renderPosts(){
        const profilePosts = posts.filter(post=>post.user_id == params.id)
        profilePosts.map(post=><Post 
            image_url = {post.image_url}
            caption = {post.caption}
            post_id = {post.id}
            user_id = {post.user_id}
            comments = {post.comments}
        />)
        console.log(posts)
    }*/

    const profilePosts = posts.filter(post=>post.user_id == params.id)

    return(
        <>
        <br/>
        {params.id==user.id ? <Link to={`/users/${user.id}/edit`}>
            Edit my profile
        </Link> : <div></div>}
        <div>
            <img src={profile.image}/>
            <h3>{profile.profile.display_name}</h3>
            <div>{profile.profile.bio}</div>
            <h3>{profile.profile.display_name}'s posts</h3>
        </div>
        {        profilePosts.map(post=><Post 
            image_url = {post.image_url}
            caption = {post.caption}
            post_id = {post.id}
            user_id = {post.user_id}
            comments = {post.comments}
        />)}
        </>
    )
}

export default Profile