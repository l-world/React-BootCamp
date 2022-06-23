import React from "react";
import "./sign.css";
import googleIcon from './icons/google.svg'
import appleIcon from './icons/apple.svg'

export default function LoginForm({login,error}) {
    const [userInfo, setUserInfo] = React.useState({
        email: "",
        name: "",
        password: "",
        date: "",
        gender: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    }

    function hanldeSubmit(e){
        console.log('submit')
        e.preventDefault();
        login(userInfo)
    }

    return (
        <div className="container--sign">
            <header className="sign--header">
                <h3 className="sign--header_h3">Logo</h3>
            </header>
            <main className="sign--main">
                <h1 className="sign--main_title">Getting Started</h1>
                <p className="sign--main_p">
                    Create an account to continue and connect with the people.
                </p>
                <div className="sign--main_btns">
                    <button>
                        <img className="sign--main_btn_icon" src={googleIcon} alt="" />
                        Log in with Google</button>
                    <button>
                        <img className="sign--main_btn_icon" src={appleIcon} alt="" />
                        Log in with Apple</button>
                </div>
                <div className="sign--main_divide">
                    <div className="sign--main_divide_line" />
                    <span className="sign--main_divide_text">OR</span>
                    <div className="sign--main_divide_line" />
                </div>
                {
                    (error !== "") ?  <div className="error">{error}</div> : ""
                }
               
                <form className="sign--main_form" onSubmit={hanldeSubmit}>
                    <p>
                        <input
                            type="email"
                            className="form_input"
                            name="email"
                            placeholder="Your Email"
                            value={userInfo.email}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            className="form_input"
                            name="name"
                            placeholder="Your Name"
                            value={userInfo.name}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <input
                            type="password"
                            className="form_input"
                            name="password"
                            placeholder="Create Password"
                            value={userInfo.password}
                            onChange={handleChange}
                        />
                    </p>
                    <div className="date_gender">
                        <input
                            type="text"
                            className="form_input date"
                            name="date"
                            placeholder="Date of birth"
                            value={userInfo.date}
                            onChange={handleChange}
                        />
                        <div className="form_input date gender_box">
                            <p>
                                <input
                                    type="radio"
                                    name="gender"
                                    id="gender_male"
                                    onChange={handleChange}
                                    checked={userInfo.gender === 'male'}
                                    value="Male"
                                />
                                <label htmlFor="gender_male">Male</label>
                            </p>
                            <p style={{
                                marginLeft:"-15px"
                            }}>
                                <input
                                    type="radio"
                                    name="gender"
                                    id="gender_female"
                                    onChange={handleChange}
                                    checked={userInfo.gender === 'female'}
                                    value="Female"
                                />
                                <label htmlFor="gender_female">Female</label>
                            </p>

                        </div>
                    </div>
                    <button className="form_sign_up">Sign Up</button>
                </form>
                <footer className="sign--footer">
                    <span className="sign--footer_have_account">Already have an account? </span>
                    <span>
                        <a className="sign--footer_sign_in" href="htts://">Sign In</a>
                    </span>
                </footer>
            </main>
        </div>
    );
}
