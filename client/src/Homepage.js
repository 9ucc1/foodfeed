import React, {useContext} from 'react'
import {UserContext} from './context/user'
import styled from 'styled-components'

function Homepage(){

    const Background = styled.div`
    background: white;
    padding: 1em;
    padding-top: 80px;
    padding-bottom: 80px;
    text-align: center;
    `

    const {user} = useContext(UserContext)

    if (!user || user.error) {
        return (<Background>
        <h2>Welcome!</h2>
        <h3>FoodFeed is a social media app for you to share pictures of food you made or just enjoyed.</h3>
        <h3>Please log in or create an account to browse and create posts.</h3>
        </Background>
        )
    } else {
        return (<Background>
        <h2>Welcome to FoodFeed, {user.username}!</h2>
        <h4>Post a picture of something you cooked, or new food you tried at a restaurant.</h4>
        <h4>Hold yourself accountable to a diet, or check up on yourself and your friends and make sure everyone is eating.</h4>
        <h4>Share words of encouragement, recipes, restaurant recs, etc with comments and likes.</h4>
        </Background>
        )
    }

}

export default Homepage