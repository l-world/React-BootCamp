import React from 'react'
import trashIcon from '../icon/trash.svg'
export default function SideBar(props) {
    const noteElements = props.notes.map( (note,index) => (
        <div key={note.id}>
            <div 
                className={
                    `title 
                    ${note.id === props.currentNoteId ? "selected-note" :"" }
                `}
                onClick={ () => props.setCurrentNoteId(note.id) }
            >
                <h4 className='text-snippet'>{note.body.split("\n")[0]}</h4>
                <button 
                    className='delete-btn'
                    onClick={ (event) => props.deleteNote(event,note.id)}
                >
                    <img className='delete-btn_icon' src={trashIcon} alt="" />
                </button>
            </div>
        </div>   
    ))
    return (
        <section className='pane sidebar'>
            <div className='sidebar--header'>
                <h3>Notes</h3>
                <button className='new-note' onClick={props.newNote} >+</button>
            </div>
            {noteElements}
        </section>
    )
}
