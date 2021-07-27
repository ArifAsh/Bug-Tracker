import React,{useState} from 'react'
import axios from 'axios'
import './bugForm.css'
import BugModel from '../../../Models/bugModel'
import {createBugs,updateBug} from '../../../Controllers/Redux/bugSlice'
import { useDispatch, useSelector } from 'react-redux';

export default (props) =>{
    const [bugObject,setBugObject] = useState(new BugModel(props.bug));
    
    const {auth} = useSelector(state=>state)
    const dispatch = useDispatch()
    const [clicked,setClicked] = useState({
        isClicked:false,
        display:false,
    }) 
    function inputChanged(e){
        setClicked({isClicked: false, display: false})
        setBugObject({
            ...bugObject,
            [e.target.name]:e.target.value
        })
    }
  
    
    function createBug(e){
        e.preventDefault();
        if ( !bugObject.name  || !bugObject.steps  || !bugObject.version || !bugObject.details ){ 
            setClicked({isClicked: true, display: false})
        }else{
            if (props.title === "Edit Bug" && auth.demo ){
                
                dispatch(updateBug(bugObject))
                // window.location = '/viewbugs'

            }else if (props.title === "Edit Bug"){
                axios.post("http://localhost:4000/app/update&token=",bugObject) 
                .then((response)=>{
                    const data = response.data;
                })
                
                
            }else if(props.title ==="Create Bug" && !auth.demo){
                setClicked({isClicked: true, display: true})
                axios.post("http://localhost:4000/app//createBug",bugObject)
                .then((response)=>{
                    const data = response.data;
                    console.log(data);
                })
            }
            else{
                setClicked({isClicked: true, display: true})
                dispatch(createBugs([bugObject]));
                // window.location = '/viewbugs'
            }
        }
        }
        
        
       
      
    
    
    return (
        <div className="page-container">
            <div className='bug-create'>
                {props.title == "Edit Bug" && <button className='close-btn' onClick={props.close}>Close</button>}
                <h1>{props.title}</h1>
                <form>
                    <label>Name:</label>
                    <input name ='name' placeholder='Bug Name' required onChange={inputChanged} value={bugObject.name}></input>
                    <label>Details:</label>  
                    <textarea name='details' placeholder='Detailed description on the bug' required onChange={inputChanged} value={bugObject.details}></textarea>
                    <label>Steps:</label>
                    <textarea name='steps' placeholder='Steps to recreate the bug' required onChange={inputChanged} value={bugObject.steps}></textarea>
                    <label>Priority:</label>    
                    <select name='priority' required onChange={inputChanged} value={bugObject.priority}>
                        <option value='1'>High</option>
                        <option value='2'>Medium</option>
                        <option value='3'>Low</option>
                        
                    </select>
                    <label>Type:</label>   
                    <select name='type' required onChange={inputChanged} value={bugObject.type}>
                        <option value='1'>Bugs/Error</option>
                        <option value='2'>Feature Requests</option>
                        <option value='3'>Other Comments</option>
                        <option value='4'>Training/Document Requests</option>
                    </select>
                    <label>Assigned:</label>
                    <select name='assigned' required onChange={inputChanged} value={bugObject.assigned}>
                        <option>Arif Ash</option>
                    </select>
                    <label>Application Version:</label>
                    <input name='version' placeholder='Application Version' onChange={inputChanged} value={bugObject.version}></input>
                    <button type='submit' onClick={createBug}>{props.title}</button>
                </form>
                {clicked.isClicked && clicked.display && alert("Ticket Created") &&
                setClicked({isClicked: false, display: false})}
                {clicked.isClicked && !clicked.display && alert("Please fill in all fields") &&
                 setClicked({isClicked: false, display: false})}
                
            </div>
        </div>
    )
}