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

    return (
        <PostsContext.Provider value={{posts, addPost, deletePost}}>
            {children}
        </PostsContext.Provider>
    )
}

export {PostsContext, PostsProvider}