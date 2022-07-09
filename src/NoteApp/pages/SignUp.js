import React from 'react'
import Account from '../components/Account'
import signUpBg from '../icon/sign-up.svg'

export default function SignUp() {
    return (
        <div className="container--login">
            <Account
                bgSrc={signUpBg}
                title="Signup"
                btnText="Signup"
                linkText="Login here"
                path="/login"
            />
        </div>
    )
}
