import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard"
import Header from "./components/Header";
import './App.css'

function App() {

  // State denoting whether the user has logged in or not (initially set to false)
  const [isSignedIn,setIsSignedIn] = useState(false)

  // 'user' is the object containing the information about the logged in user
  const [user,setUser] = useState({})

  // Loading state
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    setIsLoading(true)
    fetch(process.env.REACT_APP_BACKEND_URL + '/auth/login/success',
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
        if (response.success === false) {
          // response.success is false when user has not signed in
          return false
        }
        else if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        if(responseJson.success===false){
          setIsSignedIn(false)
          setIsLoading(false)
        }
        else{
          // set the user's received info inside the 'user' object
          setUser(responseJson.user)
          setIsSignedIn(true)
          setIsLoading(false)
        }
        
      })
      .catch(err => {
        console.log("error thrown")
        setIsSignedIn(false)
        setIsLoading(false)
        throw(err)
      });
  }, 
  []
  )

  // props are the arguments which will be sent to the children components
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