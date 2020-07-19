import React, { useState } from "react";
import './css/Textbox.css'

export default function Textbox(props){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

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

    return(
        <div className='Container'>
            <input className='Title' type='text' spellCheck='false' placeholder='Title' onChange={e => setTitle(e.target.value)}/>
            <textarea className='Description' type='text' spellCheck='false' placeholder='Take a note...' onChange={e => setDescription(e.target.value)}/>
            {title || description ? (
                <div className='Submit' onClick={()=>{
                    submitNote(props.user.googleId,title,description)
                }}>Add Note</div>
            ) : (
                <div className='Submit-Null'>Add Note</div>
            )}
        </div>
    )
}