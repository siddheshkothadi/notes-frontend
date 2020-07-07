import React from "react";
import './Dashboard.css';
import Notes from  './Notes'
import Textbox from "./Textbox";

export default function Dashboard(props){
    
    return props.isSignedIn ? (
        <div className="Dashboard"> 
            <Textbox />
            <Notes {...props}/>
        </div>
    ) :
    (   
        <div className='Dashboard'>
            <p>Please Login</p>
            <a href="http://localhost:5000/auth/google">Login</a>
        </div>
    )
}