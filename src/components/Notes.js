import React,{useContext} from 'react'
import Note from './Note'
import {NotesContext} from '../context/NotesContext'

const Notes = () => {
    const {notes} = useContext(NotesContext)

    return (
        <div className="container">
            <main className="grid">
            {
                notes.map(note=>(
                <Note note={note} key={note.id}/>   
            ))
            }
            </main>
        </div>
    )
}

export default Notes
