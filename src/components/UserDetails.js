import React from 'react'
import {useParams } from 'react-router-dom'

export default function UserDetails() {
    const param = useParams();
    const userId = param.userId
  return (
    <div>
        <h1> detail user {userId} </h1>
    </div>
  )
}
