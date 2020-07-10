import React from "react";
import './Note.css'

export default function Note(props){
    return(
        <div className='Note'>
            <div className='Note-Title'>{props.title}</div>
            <div className='Note-Description'>{props.description}</div>
            <div className='Note-DeleteSection'>
                <img src='delete.png' alt='delete' onClick={()=>deleteNote(props._id)}/>
            </div>
        </div>
    )
}

function deleteNote(_id){
    fetch(`http://localhost:5000/notes/${_id}`,
        {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":true
            },
            mode: "cors"
        })
        .then(()=>{
            window.location.reload()
        })
        .catch(err => {
            throw(err)
        });
}