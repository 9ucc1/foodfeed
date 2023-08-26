import React, {useContext, useState} from 'react'
import {UserContext} from './context/user'
import {PostsContext} from './context/posts'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

function NewPost(){

    const Background = styled.div`
    background: white;
    padding: 1em;
    padding-top: 80px;
    text-align: center;
    `

    const {user} = useContext(UserContext)

    const initialNewPost = {
        caption: "",
        image: [],
        user_id: user.id
    }

    const {addPost} = useContext(PostsContext)
    const [newPost, setNewPost] = useState(initialNewPost)
    const [errorsList, setErrorsList] = useState("")
    const history = useHistory()

    function handleChange(e){
        if(e.target.name === 'image'){
            setNewPost((currentPostState)=>(
                {...currentPostState, [e.target.name]: e.target.files[0]}
            ))
        } else {
            setNewPost((currentPostState)=>(
                {...currentPostState, [e.target.name]: e.target.value}
            ))
        }
    }


    function handleSubmit(e){
        e.preventDefault()
        if(e.target.image.files[0]==undefined){
            setErrorsList("please upload a photo!")
        } else {
        console.log(newPost)
        const formData = new FormData();
        formData.append(`post[caption]`, newPost.caption);
        formData.append(`post[image]`, e.target.image.files[0]);
        formData.append(`post[user_id]`, user.id);
        submitData(formData)
    }}

    function submitData(formData){
        fetch(`/posts`,{
            method: "POST",
            body: formData
        })
        .then(r=>r.json())
        .then(post=>{
            if (!post.errors){
                addPost(post)
                alert("new post created!")
                history.push('/posts')
            } else {
                const errorLis = post.errors.map(error =><li>{error}</li>)
                setErrorsList(errorLis)
            }
        })
    }

    return(
        <>
        <Background/>
        <h3>New Post</h3>
        <form onSubmit={handleSubmit}>
        <label>Upload Image:</label>
        <input
          type="file"
          name="image"
          className="file-upload"
          accept="image/png, image/jpeg, image/heic"
          onChange={handleChange}
        />
        <br/>
        <label>Caption:</label>
            <textarea
                type="text" name="caption" value={newPost.caption}
                onChange={handleChange}
            />
        <br/>
        <button type="submit">Create Post</button>
        </form>
        {errorsList}
        </>
    )
}

export default NewPost