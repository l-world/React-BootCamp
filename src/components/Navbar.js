import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const navLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: "none",
            marginBottom:'29px'
        }
    }

    return (
        <nav>
            <NavLink style={navLinkStyle} to="/">Home</NavLink>
            <NavLink style={navLinkStyle} to="about">About</NavLink>
            <NavLink style={navLinkStyle} to='product'>Product</NavLink>
            <NavLink style={navLinkStyle} to='profile'>Profilet</NavLink>
        </nav>
    )
}
