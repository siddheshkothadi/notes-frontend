import React from "react";
import './Header.css';

export default function(props){
    return props.isSignedIn ? (
        <div className="Header">
            <div className='Dropdown'>
                <img className='UserImage' src={props.user.picture} alt='User'/>
                <div className='DropdownContent'>
                    <div className='Username'>{props.user.name}</div>
                    <a href="http://localhost:5000/auth/logout">Logout</a>
                </div>
            </div>
            <div className='Heading'>Notes</div>
        </div>
    ) :
    (
        <div className="Header">
            <div className='SignIn-Button' onClick={()=>window.location.href='http://localhost:5000/auth/google'}>Sign In</div>
            <div className='Heading'>Notes</div>
        </div>
    )
}
