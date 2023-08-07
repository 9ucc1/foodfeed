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

    if (!isLoaded){
        return(
            <p>Loading...</p>
        )
    }

    const addPost = (addedPost) => {
        setPosts([...posts, addedPost])
    }

    return (
        <PostsContext.Provider value={{posts, addPost}}>
            {children}
        </PostsContext.Provider>
    )
}

export {PostsContext, PostsProvider}