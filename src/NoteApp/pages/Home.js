import React from 'react'
import {useNavigate} from 'react-router-dom'
import img from '../icon/homeImg.svg'

export default function Home() {

    const navigate = useNavigate();

    const goToNotes = () => {
        navigate('/notes')
    }

    return (
        <div className="wrap--home">
            <h1 className='wrap--home_title'>Welcome To the Best Note-App</h1>
            <p className='wrap--home_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipisce placerat mauris nisl. Proin vitae urna eu <span className='wrap--home_content_special'>sem pellentesque</span> laoreet. </p>
            <img className='wrap--home_img' src={img} alt="" />
            <button className='wrap--home_btn' onClick={ goToNotes}>Go to Notes</button>
        </div>
    )
}
