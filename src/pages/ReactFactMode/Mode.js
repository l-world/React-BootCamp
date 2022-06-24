import React from 'react'
import './style.css'

import Navbar from './Navbar';
import Main from './Main'

export default function Mode() {
    
    const [darkMode,setDarkMode] = React.useState(false);

    function toggleMode(){
        setDarkMode( prevMode => !prevMode)
    }

    return (
        <div className='container--mode'>
            <Navbar darkMode={darkMode} toggle={toggleMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}
