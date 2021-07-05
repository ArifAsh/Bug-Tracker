import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {signIn} from '../../../Controllers/Redux/authSlice'

import './login.css'
export default()=>{
    const dispatch = useDispatch();

    const [formInput,setFormInput] = useState({
        name:"",
        password:""
    })

    function inputChanged(e){   // when input is chnaged
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value  //sets the state of the variables
        })
    }

    function submit(e){
        dispatch(signIn(formInput));     //sends state of form to signIn reducer
        e.preventDefault();             //prevents page from automatically reloading after hitting submit
    }

    return(
        <div className="loginBG">
        
                <form className='login-panel'>
                    <h1>Sign In</h1>
                   
                    <input label name='name' placeholder = 'Name' onChange={inputChanged} value={formInput.name}></input>
                   
                    <br></br>
                    
                    <input name='password' type='password' placeholder = 'Password' onChange={inputChanged} value={formInput.password}></input>
                    
                    <br></br>
                    <button type='submit' onClick={submit}>Login</button>
                </form>
           
        </div>
    )
}