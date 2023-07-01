import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import EditProfile from './EditProfile.js'
import Signup from './Signup.js'
import Login from './Login.js'
import Logout from './Logout.js'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    fetch('/hello')
    .then(r=>r.json())
    .then(r=>setCount(r.count))
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
            <EditProfile/>
            <Signup/>
            <Login/>
            <Logout/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
