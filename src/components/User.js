import React from 'react'
import {Outlet,useSearchParams} from 'react-router-dom'

export default function User() {
    const [searchParams,setSearchParams] = useSearchParams();
    const showActive = searchParams.get("filter") === "active"
    return (
        <div>
                <h1>user1 </h1>
                <h1>user2 </h1>
                <h1>user3 </h1>
                <Outlet />
                <div>
                    <button onClick={ () => setSearchParams({filter:"active"}) } >Active User</button>
                    <button onClick={ () => setSearchParams({}) } >Reset User</button>
                </div>
                <div>
                    { showActive ? <h1>showing active users</h1> : <h1>showing all users</h1> }
                </div>
        </div>
    )
}
