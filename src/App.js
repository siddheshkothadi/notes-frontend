import React, { useState, useEffect } from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Dashboard from "./components/Dashboard"
import Header from "./components/Header";
import './App.css'


function App() {
  const [isSignedIn,setIsSignedIn] = useState(null)
  const [user,setUser] = useState({})
  
  useEffect(()=>{
      fetch("http://localhost:5000/auth/login/success",
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
      .then(response => {
          console.log("request received")
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        setIsSignedIn(true)
        setUser(responseJson.user)
      })
      .catch(error => {
        setIsSignedIn(false)
      });
    },
    [isSignedIn]
  )
  
  var cont;
  isSignedIn ? cont = <Redirect to='/dashboard'/> : cont = <a href="http://localhost:5000/auth/google">Login</a>
  
  return (
    <div className="App">
      <Header {...user} />
      <Switch>
        <Route exact path="/dashboard" >
          <Dashboard {...user} />
        </Route>
      </Switch>
      {cont}
    </div>
  )
}

export default App;