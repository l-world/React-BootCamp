import React from 'react'
import { navLink } from 'react-router-dom'
import './index.css'
import Logo from '../icon/logo.svg'

export default function Sidebar() {
  return (
    <div className='wrap--sidebar'>
        <div className='logo'>
            <img src={Logo} alt="" className='logo--img'/>
            <span className='logo--text'>logo</span>
        </div>
        <nav className='sidebar--nav'>
            <navLink className='sidebar--nav_text' to='/'>Home</navLink>
            <navLink className='sidebar--nav_text' to="/notes">Notes</navLink>
            <navLink className='sidebar--nav_text' to="/contact">Contact</navLink>
        </nav>
    </div>
  )
}
