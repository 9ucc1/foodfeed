import './App.css';
import {UserProvider} from './context/user'
import {PostsProvider} from './context/posts'
import {Switch, Route} from 'react-router-dom'
import Signup from './Signup.js'
import Login from './Login.js'
import Logout from './Logout.js'
import Header from './Header.js'
import Homepage from './Homepage.js'
import Profile from './Profile.js'
import EditProfile from './EditProfile.js'
import NewPost from './NewPost.js'
import Posts from './Posts.js'
import EditPost from './EditPost.js'


function App() {

  return (
      <div className="App">
        <UserProvider>
          <PostsProvider>
        <Header/>
        <Switch>
          <Route path='/users/:id/edit'>
            <EditProfile/>
          </Route>
          <Route path='/users/:id'>
            <Profile/>
          </Route>
          <Route path='/posts/new'>
            <NewPost/>
          </Route>
          <Route path='/posts/:id'>
            <EditPost/>
          </Route>
          <Route path='/posts'>
            <Posts/>
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
            <Homepage/>
          </Route>
        </Switch>
          </PostsProvider>
        </UserProvider>
      </div>
  );
}

export default App;
