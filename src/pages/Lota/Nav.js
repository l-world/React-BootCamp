import React from 'react'
import logoIcon from './icon/lota.svg'

export default function Nav() {
    return (
        <nav className='lota--nav'>
            <div className="lota--nav_logo">
                <a href="https://github.com/l-world/React-BootCamp/tree/React-Lota">
                    <img src={logoIcon} alt="lota-logo" />
                </a>
            </div>
            <ul className="lota--nav_bar">
                <li className="lota--nav_bar_text">Get Started
                    <div className='lota--nav_bar_text_hover'></div>
                </li>
                <li className="lota--nav_bar_text">Solutions
                    <div className='lota--nav_bar_text_hover'></div>
                </li>
                <li className="lota--nav_bar_text">Develop
                    <div className='lota--nav_bar_text_hover'></div>
                </li>
                <li className="lota--nav_bar_text">Foundation
                    <div className='lota--nav_bar_text_hover'></div>
                </li>
                <li className="lota--nav_bar_text">Connect
                    <div className='lota--nav_bar_text_hover'></div>
                </li>
            </ul>
            <div className="lota--nav_bar_secondary">
                
            </div>
        </nav>
    )
}

