import React from 'react'
import './topbar.css'
import { useSelector } from 'react-redux'

export default()=>{
    const {auth} = useSelector(state=>state)
    return(
        <div className="topbar">
            {auth.admin  ?  <h3>Logged in as: Demo Admin </h3>: <h3>Logged in as: Demo User</h3> }
            <input type="text" placeholder="Search.."></input>
        </div>
    )
}