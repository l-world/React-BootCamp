import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './NoteApp/components/Navbar'
import Home from './NoteApp/pages/Home'
import Notes from './NoteApp/pages/Notes'
import Contact from './NoteApp/pages/Contact'
import Login from './NoteApp/pages/Login'
import Signup from './NoteApp/pages/SignUp'
import NotFound from './NoteApp/pages/NotFound'

export default function App() {
    return (
        <>
           {/*  <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes> */}
            <div className='container'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/notes" element={<Notes />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                    {/* <Route path="/*" element={<NotFound />}></Route> */}
                </Routes>
            </div>

        </>
    )
}
