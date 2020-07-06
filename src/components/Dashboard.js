import React from "react";

export default function Dashboard(props){
    return(
        <div> 
            <h1>{props.user.name} has signed in</h1>
        </div>
    )
}