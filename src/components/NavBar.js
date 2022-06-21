import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {NotesContext} from '../context/NotesContext'

const NavBar = () => {
    const {count} = useContext(NotesContext)
    return (
        <nav className='site-navigation'>
            <Link className='note' to='/'>notes <span>app</span></Link>
            <ul>
                <li>
                    <Link to='/'><span>{count}</span> Notes</Link>
                </li>
                <li>
                    <Link to='/note'>Add Notes</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
