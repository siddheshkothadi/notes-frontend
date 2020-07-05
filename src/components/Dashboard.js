import React from "react";

export default function Dashboard(props){
    return(
        <div> 
            <h1>{props.name} has signed in</h1>
            <a href="http://localhost:5000/auth/logout">Logout</a>
        </div>
    )
}