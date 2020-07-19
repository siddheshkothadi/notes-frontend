import React, { useState } from "react";
import './css/Textbox.css'

export default function Textbox(props){

    // Textbox is the component which is used to add the note

    // State of the text inside the title and description section of the textbox
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    // To add a note
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
            // after adding the note, reload the page to reflect the changes
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
            ) : // Disable the 'Add Note' button when title and description are empty
            (
                <div className='Submit-Null'>Add Note</div>
            )}
        </div>
    )
}