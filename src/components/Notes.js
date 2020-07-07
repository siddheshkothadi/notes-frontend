import React, { useState, useEffect } from "react";
import './Notes.css'
import Note from './Note'

export default function Notes(props){
    const [notes,setNotes] = useState([]);
    const url = 'http://localhost:5000/notes/'+props.user.googleId;
    useEffect(()=>{
        fetch(url,
        {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
        })
        .then(response => {
            console.log("request received")
            if (response.status === 200){
                return response.json();
            }
            throw new Error("failed to load notes");
          })
          .then(responseJson => {
            setNotes(responseJson)
          })
          .catch(err => {
            throw(err)
          });
        },
        [url]
    )
    console.log(notes)
    return(
        <div className='Notes-Container'>
            {/* {notes.forEach((note)=>{
                return <h1>{note.title}</h1>
            })} */}
            {notes.map((note,i)=>
                <Note key={i} {...note}/>
            )}
        </div>
    )
}