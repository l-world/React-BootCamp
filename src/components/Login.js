import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from './auth'

const Login = () => {
    const [user,setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.login(user);
        navigate('/');
    }

  return (
    <div>
        <label htmlFor="">userName:
            <input type="text" name='userName' 
                onChange={ (e) => setUser(e.target.value) }/>
        </label>
        <button onClick={ handleLogin} >Login</button>
    </div>
  )
}

export default Login
