import React from "react";
import './Dashboard.css';
import Notes from  './Notes'
import Textbox from "./Textbox";

export default function Dashboard(props){
    if (props.isSignedIn===false) return (
        <div className='Dashboard'>
            <p>Please Login</p>
            <a href="http://localhost:5000/auth/google">Login</a>
        </div>
    )
    else
    return(   
        <div className="Dashboard"> 
            <Textbox />
            <Notes {...props}/>
        </div>
    )
}