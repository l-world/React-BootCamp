import React from 'react'
import Account from '../components/Account'
import loginBg from '../icon/login.svg'

export default function Login() {
    return (
        <Account
            bgSrc={loginBg}
            title="Account Login"
            btnText="Login"
            linkText="Sign up here"
            path="/signup"
        />
    )
}
