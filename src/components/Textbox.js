import React, { useState } from "react";
import './Textbox.css'

export default function Textbox(){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    return(
        <div className='Container'>
            <input className='Title' type='text' placeholder='Title' onChange={e => setTitle(e.target.value)}/>
            <textarea className='Description' type='text' placeholder='Take a note...' onChange={e => setDescription(e.target.value)}/>
        </div>
    )
}