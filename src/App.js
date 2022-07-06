import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './NoteApp/components/Navbar'
import Home from './NoteApp/pages/Home'
import Notes from './NoteApp/pages/Notes'
import Contact from './NoteApp/pages/Contact'
export default function App() {
    return (
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/notes" element={ <Notes /> }></Route>
                <Route path="/contact" element={ <Contact /> }></Route>
            </Routes>
        </div>
    )
}
