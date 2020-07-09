import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard"
import Header from "./components/Header";
import './App.css'

function App() {
  const [isSignedIn,setIsSignedIn] = useState(false)
  const [user,setUser] = useState({})
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
      fetch("http://localhost:5000/auth/login/success",
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin":true
        }
      })
      .then(response => {
        console.log("request received")
        if (response.success === false) {
          return false
        }
        else if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        console.log(responseJson)
        if(responseJson.success===false){
          setIsSignedIn(false)
          setIsLoading(false)
        }
        else{
          setIsSignedIn(true)
          setIsLoading(false)
          setUser(responseJson.user)
        }
        
      })
      .catch(err => {
        setIsSignedIn(false)
        setIsLoading(false)
        throw(err)
      });
    },
    []
  )
  
  
  const props = {
    user: user,
    isSignedIn: isSignedIn,
    isLoading: isLoading
  }

  return (
    <div className="App">
      <Header {...props} />
      <Dashboard {...props} />
    </div>
  )
}

export default App;