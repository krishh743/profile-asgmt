import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login/Login';
import Preferences from './Preferences';
import useToken from './useToken';
import {loginUser} from './Login/Login'

function App() {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)

  function getData(val) {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }

  const {token, setToken} = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }



  return (


    <div className="wrapper">
      <h1>Application</h1>
      <div>
        <textarea rows="5" cols="50" name="description" onChange={getData} >

        </textarea>
        <button onClick={() => setPrint(true)} >comment</button>
        {
          print ?
            <h1> {data}</h1>
            : null
        }
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          {/* <Route path="/Login"></Route> */}
        </Switch>
      </BrowserRouter>



      <div>

        <a href="" onClick='loginUser()'>LOGOUT</a>
      </div>

    </div>
  );
}

export default App;