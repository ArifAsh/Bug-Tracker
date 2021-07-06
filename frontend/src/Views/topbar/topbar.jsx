import React from 'react'
import './topbar.css'

export default()=>{
    return(
        <div className="topbar">
            <h2>Logged in as:{} </h2>
            <input type="text" placeholder="Search.."></input>
        </div>
    )
}