import React from 'react'
import './navbar.css'
import LogoIcon from "../Icon/Troll Face.png"

export default function Navbar() {
  return (
    <nav className='meme--nav'>
        <img src={LogoIcon} alt="logo" className='meme--nav_logo'/>
        <h2 className='meme--nav_title_left'>Meme Generator</h2>
        <p className='meme--nav_title_right'>React Course - Project 3</p>
    </nav>
  )
}
