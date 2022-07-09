import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './NoteApp/components/Navbar'
import Home from './NoteApp/pages/Home'
import Notes from './NoteApp/pages/Notes'
import Contact from './NoteApp/pages/Contact'
import Login from './NoteApp/pages/Login'
import Signup from './NoteApp/pages/SignUp'
import NotFound from './NoteApp/pages/NotFound'
import { AuthProvider } from './NoteApp/components/Auth'
import AuthRequire from './NoteApp/components/AuthRequire'

import { useLocation } from 'react-router-dom'

export default function App() {
    const location =  useLocation();

    return (
        <AuthProvider>
            <div className='container'>
                { ( location.pathname === '/' 
                    || location.pathname === '/notes' 
                    || location.pathname === '/contact') 
                    ? <Navbar />  
                    : "" 
                }
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/notes" element={ <AuthRequire><Notes /></AuthRequire>  }></Route>
                    <Route path="/contact" element={ <AuthRequire><Contact /></AuthRequire>  }></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </AuthProvider>
    )
}
