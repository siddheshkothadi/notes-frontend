import React from "react";
import './Note.css'

export default function Note(props){
    return(
        <div className='Note'>
            <div className='Note-Title'>{props.title}</div>
            <div className='Note-Description'>{props.description}</div>
        </div>
    )
}