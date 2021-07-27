import React,{useState} from 'react'
import axios from 'axios'
import UserModel from '../../../Models/userModel'
import { useDispatch } from 'react-redux';
import {createUser} from '../../../Controllers/Redux/authSlice'


export default (props)=>{
    const [userObject,setUserObject] = useState(new UserModel(props.user));
    
    const dispatch = useDispatch();

    function inputChanged(e){
        setUserObject({
            ...userObject,
            [e.target.name]:e.target.value
        })
    }
    function submit(e){
        e.preventDefault()
        
        const registered ={
            fullName : userObject.fullName,
            userName : userObject.userName,
            email : userObject.email,
            password : userObject.password,
            role : userObject.role,
        }
        axios.post("http://localhost:4000/app/signUp", registered)
            .then(response=>console.log(response.data))

        // window.location='/'
      
    }

    return(
        <div className = "page-container">
            <div className="bug-create">
                <h1>Create New User</h1>
                <form>
                    <label>Full Name: </label>
                    <input 
                    name="fullName"
                    placeholder="Full Name" 
                    value={userObject.fullName} 
                    required onChange={inputChanged}
                    className="form-control form-group"/>
                    <label>Username: </label>
                    <input 
                    name="userName"
                    placeholder="Username"
                    value={userObject.userName}
                    required onChange={inputChanged}
                    className="form-control form-group"
                    />
                    <label>Email: </label>
                     <input 
                     name="email"
                    placeholder="Email"
                    value={userObject.email}
                    required onChange={inputChanged}
                    className="form-control form-group"
                    />
                    <label>Password: </label>
                     <input 
                     name="password"
                    type="password"
                    placeholder="Password"
                    value={userObject.password}
                    required onChange={inputChanged}
                    className="form-control form-group"
                    />
                    <label>Role: </label>
                    <select name="role" value={userObject.admin} required onChange={inputChanged}>
                        <option>Admin</option>
                        <option>Client</option>
                    </select>
                    <button type="sumbit" className="btn btn-danger btn-block" onClick={submit} >Create User</button>
                </form>
            </div>
           
        </div>
    )
       
}