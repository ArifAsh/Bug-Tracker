import React,{useState} from 'react'
import './bugForm.css'
import BugModel from '../../../Models/bugModel'

export default (props) =>{
    const [bugObject,setBugObject] = useState(new BugModel(props.bug));

    function inputChanged(e){
        setBugObject({
            ...bugObject,
            [e.target.name]:e.target.value
        })
    }
    return (
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
                    <option value='2'>Mid</option>
                    <option value='3'>Low</option>
                </select>
                <select name='bugType' required onChange={inputChanged} value={bugObject.type}>
                    <option value='1'>Bugs/Error</option>
                    <option value='2'>Feature Requests</option>
                    <option value='3'>Other Comments</option>
                    <option value='4'>Training/Document Requests</option>
                </select>
                <label>Assigned</label>
                <select name='assigned' onChange={inputChanged} value={bugObject.assigned}>
                    <option>Arif Ash</option>
                </select>
                <label>Application Version:</label>
                <input name='version' placeholder='Application Version' onChange={inputChanged} value={bugObject.version}></input>
                <button type='submit'>{props.title}</button>
            </form>
        </div>
    )
}