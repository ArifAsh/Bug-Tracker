import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {signOut} from '../../Controllers/Redux/authSlice'
import './sidebar.css'

export default ()=>{
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state)

    function SignOut(){
        dispatch(signOut());
    }
    return (
        <div className="sidebar">
            <Link className='nav-link' to="/"><h1 className="brand">Bug-Tracker</h1></Link>
            <ul>
            <Link to='/' className='nav-link' ><li>Dashboard</li></Link>
            <Link to='/viewbugs' className='nav-link'><li>View Bugs</li></Link>
                {auth.admin  && <Link to='/create' className='nav-link'><li>Create Bugs</li></Link>}
            </ul>
            <button className="nav-link logout" onClick={SignOut}>Logout</button>
        </div>
    )
}