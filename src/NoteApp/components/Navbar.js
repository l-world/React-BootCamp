import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
import Logo from '../icon/logo.svg'

export default function Sidebar() {
    const navLinkStyle = ({isActive}) => {
        return {
            borderLeft: isActive ? "3px solid #EC7160" : "s",
            color: "#303030"
        }
    }
  return (
    <div className='wrap--sidebar'>
        <div className='logo'>
            <img src={Logo} alt="" className='logo--img'/>
            <span className='logo--text'>logo</span>
        </div>
        <nav className='sidebar--nav'>
            <NavLink style={navLinkStyle} className='sidebar--nav_text' to='/'>Home</NavLink>
            <NavLink style={navLinkStyle} className='sidebar--nav_text' to="notes">Notes</NavLink>
            <NavLink style={navLinkStyle} className='sidebar--nav_text' to="contact">Contact</NavLink>
        </nav>
    </div>
  )
}
