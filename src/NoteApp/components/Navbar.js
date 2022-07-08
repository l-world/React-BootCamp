import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../icon/logo.svg'

export default function Sidebar() {

    return (
        <div className='wrap--navbar' >
            <div className='logo'>
                <img src={Logo} alt="" className='logo--img' />
                <span className='logo--text'>logo</span>
            </div>
            <nav className='navbar'>
                <NavLink className='navbar--text' to='/'>Home</NavLink>
                <NavLink className='navbar--text' to="/notes">Notes</NavLink>
                <NavLink className='navbar--text' to="/contact">Contact</NavLink>
                {/* <NavLink className='navbar--text' to="/test">Test</NavLink> */}
            </nav>
        </div>
    )
}
