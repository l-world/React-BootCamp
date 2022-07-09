import React from 'react'
import Account from '../components/Account'
import signUpBg from '../icon/sign-up.svg'

export default function SignUp() {
    return (
        <Account
            bgSrc={signUpBg}
            title="Signup"
            btnText="Signup"
            linkText="Login here"
            path="/login"
        />
    )
}
