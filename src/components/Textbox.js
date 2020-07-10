import React, { useState } from "react";
import './Textbox.css'

export default function Textbox(props){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    return(
        <div className='Container'>
            <input className='Title' type='text' placeholder='Title' onChange={e => setTitle(e.target.value)}/>
            <textarea className='Description' type='text' placeholder='Take a note...' onChange={e => setDescription(e.target.value)}/>
            <button className='Submit' onClick={()=>submitNote(props.user.googleId,title,description)}>Submit</button>
        </div>
    )
}

function submitNote(googleId,title,description){
        fetch("http://localhost:5000/notes/add",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":true
            },
            mode: "cors",
            body: JSON.stringify({
                googleId: googleId,
                title: title,
                description: description
            })
        })
        .then(()=>{
            window.location.reload()
        })
        .catch(err => {
            throw(err)
        });
}