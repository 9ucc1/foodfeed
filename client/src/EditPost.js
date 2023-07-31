import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from './context/user'
import {useParams} from 'react-router-dom'

function EditPost(){

    const {user} = useContext(UserContext)
    const [editPost, setEditPost] = useState([])
    const params = useParams()

    useEffect(()=> {
        fetch(`/posts/${params.id}`)
        .then(r=>r.json())
        .then(post=> setEditPost(post))
    }, [])
    console.log(editPost, user)

    if (!user || user.error || user.id != editPost.post.user_id){
        return <h3>You're not authorized to edit this post.</h3>
    } else {
        return(
            <>form here</>
            /*
            <>
            <form onSubmit={handleSubmit}>
                <h4>Edit Sighting</h4>
                <label>Date: </label>
                <input
                    type="text" name="date"
                    value={editSighting.date}
                    onChange={handleChange}
                    placeholder="YYYY-MM-DD"
                />
                <br/>
                <label>Location: </label>
                <input
                    type="text" name="location"
                    value={editSighting.location}
                    onChange={handleChange}
                    placeholder="city, state"
                />
                <br/>
                <label>Notes: </label>
                <textarea
                    type="text" name="notes"
                    value={editSighting.notes}
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">Save Sighting</button>
                <button onClick={handleDelete}>Delete Sighting</button>
            </form>
            {errorsList}
            <Link to={`/sightings`}>Back to Sightings</Link>
            </>
    */)}
}

export default EditPost