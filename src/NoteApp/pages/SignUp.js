import React from 'react'
import Sign from '../components/SignIn'
import signUpBg from '../icon/sign-up.svg'

export default function SignUp() {
    return (
        <Sign
            bgSrc={signUpBg}
            title="Signup"
            btnText="Signup"
            linkText="Login here"
            path="/login"
        />
    )
}
