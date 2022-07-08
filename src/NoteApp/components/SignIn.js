import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignIn(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container--signin">
            <div className="signin--left">
                <h1 className='signin--logo'>Logo</h1>
                <div className="signin--bg_img">
                    <img src={props.bgSrc} alt="bg" />
                </div>
            </div>
            <div className="signin--right">
                <NavLink to="/login" className="signin--back_btn">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.8627 2.225L8.37936 0.75L0.137695 9L8.3877 17.25L9.8627 15.775L3.0877 9L9.8627 2.225Z" fill="#8692A6" />
                    </svg>
                    <span className="signin--back_btn_text">
                        Back
                    </span>
                </NavLink>
                <div className="wrap--account">
                    <h1 className="wrap--account_title">{props.title}</h1>
                    {
                        props.title === "Signup"
                            ?
                            <p className='signup-desc'>If you are already a member you can login with your email address and password.</p>
                            :
                            ""
                    }
                    <div className="third_party_accounts">
                        <button className="third_party_accounts_btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.1364 8.08044H18.3929V8.04213H10.0857V11.7342H15.3021C14.5411 13.8835 12.4962 15.4263 10.0857 15.4263C7.02725 15.4263 4.54756 12.9466 4.54756 9.88818C4.54756 6.82974 7.02725 4.35005 10.0857 4.35005C11.4974 4.35005 12.7818 4.88263 13.7598 5.75258L16.3705 3.14181C14.722 1.60544 12.5169 0.657959 10.0857 0.657959C4.9883 0.657959 0.855469 4.79079 0.855469 9.88818C0.855469 14.9856 4.9883 19.1184 10.0857 19.1184C15.1831 19.1184 19.3159 14.9856 19.3159 9.88818C19.3159 9.26929 19.2522 8.66517 19.1364 8.08044Z" fill="#FFC107" />
                                <path d="M1.91992 5.59197L4.95251 7.81599C5.77308 5.78442 7.76034 4.35005 10.0859 4.35005C11.4977 4.35005 12.782 4.88263 13.76 5.75258L16.3708 3.14181C14.7222 1.60544 12.5171 0.657959 10.0859 0.657959C6.54057 0.657959 3.46598 2.65953 1.91992 5.59197Z" fill="#FF3D00" />
                                <path d="M10.0859 19.1183C12.47 19.1183 14.6364 18.2059 16.2743 16.7221L13.4175 14.3047C12.4597 15.0332 11.2892 15.4272 10.0859 15.4262C7.68507 15.4262 5.64658 13.8954 4.87863 11.759L1.86865 14.0781C3.39625 17.0673 6.49853 19.1183 10.0859 19.1183Z" fill="#4CAF50" />
                                <path d="M19.1366 8.0803H18.3931V8.04199H10.0859V11.7341H15.3024C14.9384 12.757 14.2826 13.6508 13.4162 14.3052L13.4176 14.3042L16.2743 16.7216C16.0722 16.9053 19.3162 14.5031 19.3162 9.88804C19.3162 9.26915 19.2525 8.66503 19.1366 8.0803Z" fill="#1976D2" />
                            </svg>
                            <span className='btn_text'>Google account</span>
                        </button>
                        <button className="third_party_accounts_btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.4632 19.9212C19.0503 19.9212 19.5263 19.4452 19.5263 18.858V1.72112C19.5263 1.13389 19.0503 0.657959 18.4632 0.657959H1.32634C0.739044 0.657959 0.263184 1.13389 0.263184 1.72112V18.858C0.263184 19.4452 0.739044 19.9212 1.32634 19.9212H18.4632Z" fill="#395185" />
                                <path d="M13.5545 19.921V12.4612H16.0585L16.4334 9.55407H13.5545V7.69788C13.5545 6.85617 13.7883 6.28257 14.9953 6.28257L16.5348 6.28189V3.68174C16.2684 3.6463 15.3546 3.56714 14.2915 3.56714C12.0719 3.56714 10.5524 4.92196 10.5524 7.41006V9.55407H8.04199V12.4612H10.5524V19.921H13.5545Z" fill="white" />
                            </svg>

                            <span className='btn_text'>Facebook account</span>
                        </button>
                    </div>
                    <div className="divide">
                        <span className='line'></span>
                        <span className='divide_text'>Or</span>
                        <span className='line'></span>
                    </div>
                    <form className='account_form'>
                        <div className="account_form_row">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="account_form_row">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <button className="account_btn" onClick={ handleSubmit}>{props.btnText}</button>
                    </form>
                    <div className="signin--footer">
                        Dont have an account ? <NavLink to={props.path} className='signin--footer_link'>{props.linkText}</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

