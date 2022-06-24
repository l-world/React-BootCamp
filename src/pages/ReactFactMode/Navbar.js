import React from 'react'
import lightIcon from './svg/light-switch.svg'
import darkIcon from './svg/dark-switch.svg'

export default function Navbar(props) {
    return (
        <nav className={`navbar ${props.darkMode ? 'dark' : ""}`}>
            <img className='navbar--logo_icon' src={process.env.PUBLIC_URL + `logo192.png`} alt="" />
            <h1 className='navbar--logo_tex'>ReactFacts</h1>
            <div className='navbar--mode' > 
                <span className='navbar--mode_text ligt'>Light</span>
                <button className='navbar--mode_btn' onClick={ props.toggle && props.toggle }>
                   <img src={ props.darkMode ? darkIcon : lightIcon} alt="" />
                </button>
                <span className='navbar--mode_text'>Dark</span>
            </div>
        </nav>
    )
}
