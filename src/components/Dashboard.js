import React from "react";
import './Dashboard.css';
import Notes from  './Notes'
import Textbox from "./Textbox";

export default function Dashboard(props){
    if (props.isLoading) return (
        <div className='LoadingDashboard'>
            <img src='loading.svg' alt='Loading'/>
        </div>
    )
    else if (props.isSignedIn===false) return (
        <div className='NotSignedInDashboard'>
            {/* <div>Please login</div> */}
            <a href='http://localhost:5000/auth/google'>Login</a>            
        </div>
    )
    else if(props.isSignedIn) return(   
        <div className="Dashboard">
            <Textbox />
            <Notes {...props} />
        </div>
    )
}