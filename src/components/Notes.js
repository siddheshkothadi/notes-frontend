import React, { useState, useEffect } from "react";
import './css/Notes.css'
import Note from './Note'

export default function Notes(props){

    // Notes is a component which shows all the available Notes... 
    // Note is a child component of Notes

    // 'notes' is an array of objects which will be fetched from the server
    //  It will contain all the notes of the user
    // 'url' is based on the unique googleId of the signed in user
    const [notes,setNotes] = useState([]);
    var url = 'http://localhost:5000/notes/'+props.user.googleId;
    
    // 'fetchingNotes' is the loading state while fetching the notes
    const [fetchingNotes, setFetchingNotes] = useState(true)

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
        })
        .then(response => {
            if (response.status === 200){
                return response.json()
            }
            throw new Error("failed to load notes");
          })
          .then(responseJson => {
            // reverse the received json array so that the latest notes appear on top
            setNotes(responseJson.reverse())
            setFetchingNotes(false)
          })
          .catch(err => {
            setFetchingNotes(false)
            throw(err)
          });
        },
        //  useEffect is triggerred whenever the url changes
        [url]
    )

    // For loading state
    return fetchingNotes ? (
        <div className='Notes-Container'>
            <img src={process.env.PUBLIC_URL+'/loading.svg'} alt='Loading'/>
        </div>
    ) :
    // Display the notes on the dashboard
    (
        <div className='Notes-Container'>
            {notes.map((note,i)=>
                <Note key={i} {...note} />
            )}
        </div>
    )
}
