import React, {useContext} from 'react'
import {UserContext} from './context/user'

function Homepage(){

    const {user} = useContext(UserContext)

    if (!user || user.error) {
        return (<>
        <h2>Welcome!</h2>
        <h3>Please log in or create an account to browse and create posts.</h3>
        </>
        )
    } else {
        return (<>
        <h2>Welcome, {user.username}!</h2>
        <h3>feed here?</h3>
        </>
        )
    }

}

export default Homepage