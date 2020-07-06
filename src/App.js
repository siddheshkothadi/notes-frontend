import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard"
import Header from "./components/Header";
import './App.css'


function App() {
  const [isSignedIn,setIsSignedIn] = useState(false)
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
      .catch(err => {
        setIsSignedIn(false)
        throw(err)
      });
    },
    [isSignedIn]
  )
    
  const props = {
    user: user,
    isSignedIn: isSignedIn
  }

  return (
    <div className="App">
      <Header {...props} />
      <Dashboard {...props} />
    </div>
  )
}

export default App;