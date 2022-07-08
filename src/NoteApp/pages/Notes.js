import React from 'react'
import Editor from '../components/Editor'
import Sidebar from '../components/NoteSidebar'
// import Split from 'react-split'
import { nanoid } from 'nanoid'

export default function NoteApp() {

    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem('notes')) || []
    );
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    /* lazys Initialized */
    /* const [state,setState] = React.useState( () => {
        console.log("state Initialized")
    }); */

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])

    function handleDate(){
        const date = new Date();
        const year =  date.getFullYear();
        let month = date.getMonth() + 1;
        const day = date.getDate();
        switch(month){
            case 1:
                month = "Jan";
                break;
            case 2:
                month = "Feb";
                break;
            case 3: 
                month = "Mar";
                break;
            case 4:  
                month = "Apr";
                break;
            case 5: 
                month = "May";
                break;
            case 6: 
                month = "Jun";
                break;
            case 7: 
                month = "Jul";
                break;
            case 8:
                month = "Aug"; 
                break;
            case 9:
                month = "Sep"; 
                break;
            case 10: 
                month = "Oct";
                break;
            case 11: 
                 month =  "Nov";
                 break;
            case 12: 
                month = "Dec";
                break;
            default:
                return "";
        }
        return `${month} ${day}, ${year}`
    }

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",
            date: handleDate(),
        }

        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        // console.log('update note');

        setNotes(oldNotes => {
            let newArray = [];
            for (let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if (oldNote.id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray;
        })

        /* setNotes( oldNotes => oldNotes.map( oldNote => {
            return oldNote.id === currentNoteId 
                ? {...oldNote, body:text} : oldNote
        })) */
    }

    function deleteNote(event, noteId) {
        event.stopPropagation();
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    return (
        <main className='note-container'>
            <Sidebar
                notes={notes}
                currentNoteId={currentNoteId}
                setCurrentNoteId={setCurrentNoteId}
                newNote={createNewNote}
                deleteNote={deleteNote}
            />
            {
                currentNoteId &&
                notes.length > 0 &&
                <Editor
                    currentNote={findCurrentNote()}
                    updateNote={updateNote}
                />
            }
        </main>
    )
}