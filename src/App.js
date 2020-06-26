import React, { useState } from 'react';
import './App.css';

function App() {

  const [isSignedIn,setIsSignedIn] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
        <p>Twitter here!</p>
      </header>
    </div>
  );
}

export default App;
