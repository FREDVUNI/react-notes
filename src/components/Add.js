import React,{useState,useContext} from 'react'
import {NotesContext} from '../context/NotesContext'
import {v4 as uuidv4} from 'uuid'
import {Navigate} from 'react-router-dom'

const Add = () =>{
    const [title,setTitle] = useState("")
    const [details,setDetails] = useState("")

    const {notes,setNotes} = useContext(NotesContext)

    const addNotes = (e) =>{
        e.preventDefault();

        setNotes([...notes,{
            title:title,
            details:details,
            id:uuidv4()
            }
        ])
        
        localStorage.setItem("notes",JSON.stringify(notes))
        return <Navigate to ="/" replace = {true}/>
    }

    return(
        <>
        <section className="contact-wrap">
            <form action="" className="contact-form" onSubmit={addNotes}>
                <div className="col-sm-6">
                    <label htmlFor="title">Title</label>
                    <input placeholder="Enter note title" onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control input-block" type="text" required/>
                </div>
                <div className="col-sm-12">
                    <label htmlFor="details">Description</label>
                    <textarea rows="3" value={details} onChange={(e)=>setDetails(e.target.value)} placeholder="Enter the note details" type="text" className="form-control input-block textarea" required></textarea>
                </div>
                <div className="col-sm-12">
                    <button className="square-button" onClick={addNotes}>Add note</button>
                </div>
            </form>
        </section>
        </>
    )
}

export default Add