import React from 'react'
import Sign from '../components/SignIn'
import loginBg from '../icon/login.svg'

export default function Login() {
    return (
        <Sign
            bgSrc={loginBg}
            title="Account Login"
            btnText="Login"
            linkText="Sign up here"
            path="/signup"
        />
    )
}
