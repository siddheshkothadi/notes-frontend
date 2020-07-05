import React from "react";
import './Header.css';

export default function(props){
    return(
        <div className="Header">
            <img src={props.picture} alt='User Profile'/>
            <div className="Dropdown-content">
                <a href="#">Logout</a>
            </div>
            <p>Notes</p>
        </div>
    )
}