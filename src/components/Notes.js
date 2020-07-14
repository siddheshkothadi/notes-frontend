import React, { useState, useEffect } from "react";
import './Notes.css'
import Note from './Note'

export default function Notes(props){
    const [notes,setNotes] = useState([]);
    const [fetchingNotes, setFetchingNotes] = useState(true)
    var url = 'http://localhost:5000/notes/'+props.user.googleId;
    useEffect(()=>{
        setFetchingNotes(true)
        fetch(url,
        {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin":true
            }
            // mode: 'cors'
        })
        .then(response => {
            console.log("notes request received")
            if (response.status === 200){
                return response.json()
            }
            throw new Error("failed to load notes");
          })
          .then(responseJson => {
            setNotes(responseJson.reverse())
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
                <Note key={i} {...note} />
            )}
        </div>
    )
}