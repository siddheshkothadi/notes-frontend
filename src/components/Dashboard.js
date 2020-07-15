import React from "react";
import './Dashboard.css';
import Notes from  './Notes'
import Textbox from "./Textbox";

export default function Dashboard(props){
    if (props.isLoading) return (
        <div className='LoadingDashboard'>
            <img src={process.env.PUBLIC_URL+'/loading.svg'} alt='Loading'/>
        </div>
    )
    else if (props.isSignedIn===false) return (
        <div className='NotSignedInDashboard'>
            <div class="Google-Btn" onClick={()=>window.location.href='http://localhost:5000/auth/google'}>
                <img class="Google-Icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                <div class="Btn-Text">Sign in with Google</div>
            </div>
        </div>
    )
    else if(props.isSignedIn) return(   
        <div className="Dashboard">
            <Textbox {...props} />
            <Notes {...props} />
        </div>
    )
}
