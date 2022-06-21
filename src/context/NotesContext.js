import React,{createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'

export const NotesContext = createContext()

export const NotesProvider = ({children}) =>{
    let data =[
        {
            id:uuidv4(),
            title:'Seamlessly visualize quality',
            details:'Collaboratively administrate empowered markets via plug-and-play networks.'  
        },
        {
            id:uuidv4(),
            title:'Completely Synergize',
            details:'Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.'  
        },
        {
            id:uuidv4(),
            title:'Sanity check',
            details:'Objectively innovate empowered manufactured products whereas parallel platforms.'  
        },
    ]
    
    localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : localStorage.setItem("notes",JSON.stringify(data))

    let store =  JSON.parse(localStorage.getItem("notes"))

    const [notes,setNotes] = useState(store)
    let [count,setCount] = useState('')

    const deleteNote = (id) =>{
        let new_notes = store.filter(note => note.id !== id)
        localStorage.setItem("notes",JSON.stringify(new_notes))
        setNotes(new_notes)
        setCount(new_notes.length)
    }

    if(store.length > 0){
        count = store.length
    }else{
        count = 0
    }
    
    return(
        <NotesContext.Provider value={{notes,setNotes,count,deleteNote}}>
            {children}
        </NotesContext.Provider>
    )
}