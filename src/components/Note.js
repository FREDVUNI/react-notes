import React,{useContext} from 'react'
import { NotesContext } from '../context/NotesContext'

const Note = ({note}) => {
    const {deleteNote} = useContext(NotesContext)
    
    return (
        <article>
            <div className="text">
                <span className='fa fa-times' onClick={()=>deleteNote(note.id)}></span>
                <h3>{note.title}</h3>
                <p>{note.details}</p>
            </div>
        </article>
        
    )
}

export default Note
