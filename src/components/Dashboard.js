import React from "react";
import './css/Dashboard.css';
import Notes from  './Notes'
import Textbox from "./Textbox";

export default function Dashboard(props){

    // When loading, show loading svg
    if (props.isLoading) return (
        <div className='LoadingDashboard'>
            <img src={process.env.PUBLIC_URL+'/loading.svg'} alt='Loading'/>
        </div>
    )
    // When not signed in, show an option to sign in with google
    else if (props.isSignedIn===false) return (
        <div className='NotSignedInDashboard'>
            <div className='Notes-Head'>
                <img className='Notes-Logo' src={process.env.PUBLIC_URL + '/favicon.ico'} alt='Icon'/>
                <div className='Notes-Head-Text'>NOTES</div>
            </div>
            <div className='Typewriter'>
                <div>The simplest way</div>
                <div>to keep notes ...</div>
            </div>
            <div className="Google-Btn" onClick={()=>window.location.href='http://localhost:5000/auth/google'}>
                <img className="Google-Icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt='google'/>
                <div className="Btn-Text">Sign in with Google</div>
            </div>
        </div>
    )
    // If signed in, show the regular dashboard with notes and textbox
    else if(props.isSignedIn) return(   
        <div className="Dashboard">
            <Textbox {...props} />
            <Notes {...props} />
        </div>
    )
}
