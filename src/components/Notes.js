import React, { useState, useEffect, Component } from "react";
import './Notes.css'
import Note from './Note'
// import '../../public/loading.svg'

export default function Notes(props){
    const [notes,setNotes] = useState([]);
    const [fetchingNotes, setFetchingNotes] = useState(true)
    var url = 'http://localhost:5000/notes/'+props.user.googleId;
    useEffect(()=>{
        fetch(url,
        {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin":true
            },
            mode: 'cors'
        })
        .then(response => {
            console.log("request received")
            if (response.status === 200){
                return response.json()
            }
            throw new Error("failed to load notes");
          })
          .then(responseJson => {
            console.log(responseJson, url)
            setNotes(responseJson)
            setFetchingNotes(false)
          })
          .catch(err => {
            setFetchingNotes(false)
            throw(err)
          });
        },
        [props.user.googleId]
    )
    return fetchingNotes ? (
        <div className='Notes-Container'>
            <img src='loading.svg' alt='Loading'/>
        </div>
    ) :
    (
        <div className='Notes-Container'>
            {console.log('here')}
            {notes.map((note,i)=>
                <Note key={i} {...note} />
            )}
        </div>
    )
}