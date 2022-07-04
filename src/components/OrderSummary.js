import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSummary() {
    const navigate = useNavigate()
    return (
        <div>
            order-summary Pages
            <br />
            <button onClick={() => navigate(-1)}>goback</button>
        </div>
    )
}
