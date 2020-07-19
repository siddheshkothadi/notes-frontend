import React, { useState } from "react";
import './css/Note.css'

export default function Note(props){
    const [noteTitle, setNoteTitle] = useState(props.title)
    const [noteDescription, setNoteDescription] = useState(props.description)
    const [isHidden, setIsHidden] = useState(true)
    const [isSaving, setIsSaving] = useState(false)
    const [modalTitle, setModalTitle] = useState(props.title)
    const [modalDescription, setModalDescription] = useState(props.description)

    function insideModalOnClick(e) {
        e.stopPropagation()
    }

    function deleteNote(_id,e){
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
                window.location.reload()
            })
            .catch(err => {
                throw(err)
            });
    }
    
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
            <div className='Note' onClick={()=>setIsHidden(false)}> 
                <div className='Note-Title'>{noteTitle}</div>
                <div className='Note-Description'>{noteDescription}</div>
                <div className='Note-DeleteSection'>
                    <img src={process.env.PUBLIC_URL+'/edit.png'} alt='edit'/>
                    <img src={process.env.PUBLIC_URL+'/delete.png'} alt='delete' onClick={(e)=>deleteNote(props._id,e)}/>
                </div>
            </div>
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
