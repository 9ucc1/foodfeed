import React, {useState, useEffect} from 'react'

const PostsContext = React.createContext()

function PostsProvider({children}){
    const [posts, setPosts] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch('/posts')
        .then(r=>r.json())
        .then(r=>{
            setPosts(r)
            setIsLoaded(true)
        })
    }, [])

    //console.log(posts)

    if (!isLoaded){
        return(
            <p>Loading...</p>
        )
    }

    const addPost = (addedPost) => {
        setPosts([...posts, addedPost])
    }

    const deletePost = (deletedPostId) => {
        const updatedPosts = posts.filter(post=>post.id != deletedPostId)
        setPosts(updatedPosts)
    }

    const addComment = (addedComment) => {
        console.log(addedComment)
        const updatedPost = posts.find(post=>post.id == addedComment.post_id)
        const updatedComments = [...updatedPost.comments, addedComment]
        updatedPost.comments = updatedComments
        const updatedPosts = posts.map(post => {
            if(post.id == updatedPost.id){
                return updatedPost
            } else return post
        })
        setPosts(updatedPosts)
    }

    const deleteComment = (deletedCommentId, postId) => {
        console.log(deletedCommentId, postId)
        const updatedPost = posts.find(post=>post.id == postId)
        const updatedComments = updatedPost.comments.filter(comment => comment.id != deletedCommentId)
        updatedPost.comments = updatedComments
        const updatedPosts = posts.map(post =>{
            if(post.id == updatedPost.id){
                return updatedPost
            } else return post
        })
        setPosts(updatedPosts)
    }

    return (
        <PostsContext.Provider value={{posts, addPost, deletePost, addComment, deleteComment}}>
            {children}
        </PostsContext.Provider>
    )
}

export {PostsContext, PostsProvider}