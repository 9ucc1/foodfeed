import React, {useContext} from 'react'
import {UserContext} from './context/user'

function Homepage(){

    const {user} = useContext(UserContext)

    if (!user || user.error) {
        return (<>
        <h2>Welcome!</h2>
        <h3>FoodFeed is a social media app for you to share pictures of food you made or just enjoyed.</h3>
        <h3>Please log in or create an account to browse and create posts.</h3>
        </>
        )
    } else {
        return (<>
        <h2>Welcome, {user.username}!</h2>
        <h4>Post a picture of something you cooked, new food you tried at a restaurant, hold yourself accountable to a diet, or check up on yourself and your friends and make sure everyone is eating. Share words of encouragement, recipes, restaurant recs, etc with comments and likes.
        </h4>
        </>
        )
    }

}

export default Homepage