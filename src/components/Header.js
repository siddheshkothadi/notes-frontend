import React from "react";
import './Header.css';

export default function(props){
    return(
        <div className="Header">
            <img src={props.user.picture} alt='User Profile'/>
            <a href="http://localhost:5000/auth/logout">Logout</a>
            <a href="http://localhost:5000/auth/google">Login</a>
            <div className='Heading'>Notes</div>
        </div>
    )
}