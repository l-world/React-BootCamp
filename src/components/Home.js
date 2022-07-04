import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            Home Pages
            <br />
            <button onClick={ () => navigate('order-summary') } >OrderSummary</button>
        </div>
    )
}

export default Home
