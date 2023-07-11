import './App.css';
import {useState, useEffect} from 'react'
import {UserProvider} from './context/user'
import {Switch, Route} from 'react-router-dom'
import Signup from './Signup.js'
import Login from './Login.js'
import Logout from './Logout.js'
import Header from './Header.js'
import Homepage from './Homepage.js'
import Profile from './Profile.js'
import EditProfile from './EditProfile.js'
import NewPost from './NewPost.js'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    fetch('/hello')
    .then(r=>r.json())
    .then(r=>setCount(r.count))
  }, [])


  //FIX PROFILE ROUTES
  return (
      <div className="App">
        <UserProvider>
        <Header/>
        <Switch>
          <Route path='/user/:id/edit'>
            <EditProfile/>
          </Route>
          <Route path='/user/:id'>
            <Profile/>
          </Route>
          <Route path='/posts/new'>
            <NewPost/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/logout'>
            <Logout/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
            <Homepage/>
          </Route>
        </Switch>
        </UserProvider>
      </div>
  );
}

export default App;
