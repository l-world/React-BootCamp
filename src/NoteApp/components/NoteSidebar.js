import React from 'react'
import trashIcon from '../icon/trash.svg'

export default function NoteSidebar(props) {

    const [toggle, setToggle] = React.useState('');

    const handleToggleClick = () => {
        setToggle(toggle ? '' : 'note_sidebar_toggle')
    }

    const noteElements = props.notes.map((note) => {
        const noteArr = note.body.split("\n");
        const title = noteArr[0];
        const content = noteArr.slice(1).join().substring(1);
        console.log(title, content);
        return <div
            className={
                `note--sideba_headline_row 
                        ${note.id === props.currentNoteId ? "row--active" : ""}
                        `}
            onClick={() => props.setCurrentNoteId(note.id)}
            key={note.id}
        >
            <p className='note--sideba_headline_title'>{title}</p>
            <p className='note--sideba_headline_content ellipsis'>{content}</p>
            <p className='note--sideba_headline_content date'>{note.date}</p>
            <button
                className='delete-btn'
                onClick={(event) => props.deleteNote(event, note.id)}
            >
                 <img className='delete-btn_icon' src={trashIcon} alt="" />
            </button>
        </div>
    })

    return (
        <div className='contaienr--note_sidebar'>
            <div className={`wrap--note_sidebar ${toggle}`}>
                <button className="btn note--sidebar_btn" onClick={props.newNote}>Create Note</button>
                <div className="note--sidebar_title">Note</div>
                <div className="note--sideba_headline">
                    {noteElements}
                </div>
            </div>
            <div className="note--sidebar_switch" onClick={handleToggleClick}></div>
        </div>
    )
}
