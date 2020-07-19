import React, { useState } from "react";
import './css/Note.css'

export default function Note(props){
    
    // Note is a component denoting a single note.. and it is a child component of Notes component

    // title and description of the note respectively
    const [noteTitle, setNoteTitle] = useState(props.title)
    const [noteDescription, setNoteDescription] = useState(props.description)
    // isHidden is a state denoting visibility of pop-up modal
    const [isHidden, setIsHidden] = useState(true)
    // title and description which is shown inside the modal
    const [modalTitle, setModalTitle] = useState(props.title)
    const [modalDescription, setModalDescription] = useState(props.description)
    // isSaving is set true when sending a PUT(update) request from the modal
    const [isSaving, setIsSaving] = useState(false)

    // Function to ovverride the click effect inside the modal
    function insideModalOnClick(e) {
        e.stopPropagation()
    }

    // Deletes a note
    function deleteNote(_id,e){
        // To ovverride the click effect inside the note... 
        // i.e. to stop opening modal on clicking the delete icon which is inside the note
        e.stopPropagation()
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
                // after deletion, reload the page to refresh the layout
                window.location.reload()
            })
            .catch(err => {
                throw(err)
            });
    }
    
    // Updates a note.. while editing a note inside a modal
    function updateNote(_id,title,description) {
        setIsSaving(true)
        fetch(`http://localhost:5000/notes/update/${_id}`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":true
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                })
            })
            .then(()=>{
                // Update the title and description of note to reflect the changes without reloading the page
                setNoteTitle(title)
                setNoteDescription(description)
                setIsSaving(false)
            })
            .catch(err => {
                setIsSaving(false)
                throw(err)
            });
    }

    return(
        <div className='Note-Modal'>
            {/* Modal is shown after clicking on a note */}
            <div className='Note' onClick={()=>setIsHidden(false)}> 
                <div className='Note-Title'>{noteTitle}</div>
                <div className='Note-Description'>{noteDescription}</div>
                <div className='Note-DeleteSection'>
                    <img src={process.env.PUBLIC_URL+'/edit.png'} alt='edit'/>
                    <img src={process.env.PUBLIC_URL+'/delete.png'} alt='delete' onClick={(e)=>deleteNote(props._id,e)}/>
                </div>
            </div>
            {/* Show modal only if isHidden is set to false */}
            {!isHidden && (
                <div className='Modal' onClick={()=>setIsHidden(true)}>
                    <div className='Modal-Content' onClick={insideModalOnClick}>
                        <div className='Save-Section'>
                            {isSaving ? (
                                <div className='Modal-Save-Text'>Saving...</div>
                            ) : (
                                <div className='Modal-Save-Text'>All changes saved ✓</div>
                            ) }
                        </div>
                        <textarea rows='1' className='Modal-Title' spellCheck='false' placeholder='Title' defaultValue={noteTitle} onChange={e => {
                            setModalTitle(e.target.value)
                            updateNote(props._id,e.target.value,modalDescription)
                        }}/>
                        <textarea rows='8' className='Modal-Description' spellCheck='false' placeholder='Take a note...' defaultValue={noteDescription} onChange={e => {
                            setModalDescription(e.target.value)
                            updateNote(props._id,modalTitle,e.target.value)
                        }}/>
                        <div className='Modal-Close'>
                            <div className='Modal-Close-Text' onClick={()=>setIsHidden(true)}>Close</div>
                            <div className='Modal-Delete' onClick={(e)=>deleteNote(props._id,e)}>Delete</div> 
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
