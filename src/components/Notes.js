import React, { useState, useEffect } from "react";
import './Notes.css'
import Note from './Note'
// import '../../public/loading.svg'

export default function Notes(props){
    const [notes,setNotes] = useState([]);
    const [fetchingNotes, setFetchingNotes] = useState(true)
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
            setFetchingNotes(false)
          })
          .catch(err => {
            setFetchingNotes(false)
            throw(err)
          });
        },
        [url]
    )
    return fetchingNotes ? (
        <div className='Notes-Container'>
            <img src='loading.svg' alt='Loading'/>
        </div>
    ) :
    (
        <div className='Notes-Container'>
            {notes.map((note,i)=>
                <Note key={i} {...note}/>
            )}
        </div>
    )
}