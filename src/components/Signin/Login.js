import React from 'react'
import LoginForm from './LoginForm';

export default function Login() {

    const adminUser = {
        email:"admine@test.com",
        password:"123456"
    }

    const [user, setUser] = React.useState({
        email: "",
        name: "",
        password: "",
        date: "",
        gender: "",
    });
    const [error,setError] = React.useState("");

    const login = details => {
        console.log(details);
        if(details.email === adminUser.email && details.password === adminUser.password && details.name){
            console.log("logged in");
            // const {name,email} = details
            setUser( prev => {
                return {
                    ...prev,
                    ...details
                }
            })
        }else{
            setError("Not Match!")
        }
    }

    const logout = () => {
        setUser( prev => {
            return {
                ...prev,
                name:'',
                email:'',
                date:'',
                password:'',
                gender:''
            }
        })
    }

    return (
        <div className='container-login'>
            {
                (user.email !== "") ? (
                    <div className="welcome">
                        <h1>Welcome,<span>{user.name}</span></h1>
                        <ul>
                            <li>{'Email:' + user.email}</li>
                            <li>{'Birth:' + user.date}</li>
                            <li>{'Gender:' + user.gender}</li>
                        </ul>
                        <button onClick={logout}>Logout</button>
                    </div>
                ):(
                    <LoginForm login={login} error={error} />
                )
            }
        </div>
    )
}
