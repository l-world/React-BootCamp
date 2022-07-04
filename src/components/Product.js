import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Product() {
    return (
        <div>
            <input type="search" name="" id="" />
            <br />
            <nav>
                <Link to="feature">Feature</Link>
                <Link to="new">New</Link>
            </nav>
            <Outlet />
        </div>
    )
}

