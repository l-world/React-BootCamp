import React from 'react'

export default function Contact() {

    const [info,setInfo] = React.useState({
        name:"",
        email:"",
        title:"",
        message:"",
    })

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info)
    }

    return (
        <div className='wrap--contact'>
            <h1 className='wrap--contact_title'>Contact</h1>
            <form className='wrap--contact_form'>
                <div className="row first-row">
                    <p className='first-column'>
                        <label htmlFor="name">Name*</label>
                        <input type="text" name="name" id="name" value={info.name} onChange={ handleChange }/>
                    </p>
                    <p>
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" value={info.email} onChange={ handleChange }/>
                    </p>
                </div>
                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={info.title} onChange={ handleChange }/>
                </div>
                <div className="row">
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" value={info.message} onChange={ handleChange }></textarea>
                </div>
                <button className='wrap--contact_form_btn' onClick={ handleSubmit }>Post Comment</button>
            </form>
        </div>
    )
}
