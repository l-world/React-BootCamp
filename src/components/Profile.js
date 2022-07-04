import React from 'react'
import {useAuth} from './auth'
import { useNavigate } from 'react-router-dom'


export default function Profile() {
    
    const auth = useAuth();
    const navigate = useNavigate();

    function handleClick(){
        auth.logout();
        navigate('/')
    }

    return (
        <div>
            <h1>Welcome,{auth.user}      </h1>      
            <button onClick={ handleClick}>Logout</button>
        </div>
    )
}

