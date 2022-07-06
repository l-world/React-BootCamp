import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {

    const auth = useAuth();

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
            <NavLink style={navLinkStyle} to='profile'>Profile</NavLink>
            {
                !auth.user && (
                    <NavLink style={navLinkStyle} to='login'>Login</NavLink>
                )
            }
        </nav>
    )
}
