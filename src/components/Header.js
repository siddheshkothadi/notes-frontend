import React from "react";
import './Header.css';

export default function(props){
    return props.isSignedIn ? (
        <div className="Header">
            <div className='Dropdown'>
                <img className='UserImage' src={props.user.picture} alt='User'/>
                <div className='DropdownContent'>
                    <div>{props.user.name}</div>
                    <a href="http://localhost:5000/auth/logout">Logout</a>
                </div>
            </div>
            <div className='Heading'>Notes</div>
        </div>
    ) :
    (
        <div className="Header">
            <div className='Dropdown'>
            <img className='UserImage' src='account.png' alt='User'/>
                <div className='DropdownContent'>
                    <a href="http://localhost:5000/auth/google">Login</a>
                </div>
            </div>
            <div className='Heading'>Notes</div>
        </div>
    )
}