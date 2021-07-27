import axios from 'axios'
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {signIn} from '../../../Controllers/Redux/authSlice'

import './login.css'
export default()=>{
    const dispatch = useDispatch();

    const [formInput,setFormInput] = useState({
        admin:false,
        name:"",
        password:"",
      
    });

    function inputChanged(e){   // when input is chnaged
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value  //sets the state of the variables
        })
    }

    function DemoAdmin(e){
        e.preventDefault();        //prevents page from automatically reloading after hitting submit
       
        dispatch(signIn({name:formInput.name,admin:true}));     //sends state of form to signIn reducer
    }
      
    function DemoClient(e){
        e.preventDefault();       //prevents page from automatically reloading after hitting submit  
        dispatch(signIn({name:formInput.name,admin:false}));      //sends state of form to signIn reducer
        
    }
    function Login(e){
        e.preventDefault();
        
        const info = {
            email: formInput.name,
            password: formInput.password
        }
    
        axios.post("http://localhost:4000/app/signIn",info)
        .then((response)=>{
            const data = response.data;
            if (data.success == true){
                let admin = "";
                if (data.user.role == "admin"){
                    admin = true;
                }else{ 
                    admin = false
                }
                dispatch(signIn({
                fullName:data.user.fullName,
                admin: admin,
                demo: false
                }))
               
                axios.get("http://localhost:4000/app/verify?token="+data.token)
                .then((response)=>{
                    const data = response.data;
                    
                })
                
            }
        })
        
       
    }

    return(
        <div className="loginBG">
        
                <form className='login-panel'>
                    <h1>Sign In</h1>
                   
                    <input label name='name' placeholder = 'Name' onChange={inputChanged} value={formInput.name}></input>
                   
                    <br></br>
                    
                    <input name='password' type='password' placeholder = 'Password' onChange={inputChanged} value={formInput.password}></input>
                    
                    <br></br>
                    <button type='submit' onClick={Login}>Login</button>
                    <button type='submit' onClick={DemoAdmin}>DemoAdmin</button>
                    <button type='submit' onClick={DemoClient}>DemoClient</button>
                </form>
           
        </div>
    )
}