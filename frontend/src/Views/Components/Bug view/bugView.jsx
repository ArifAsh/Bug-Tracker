import React,{useState} from 'react'
import ViewSection from './component/bugViewSection'
import './bugView.css'
import BugModel from '../../../Models/bugModel'
import {useDispatch} from 'react-redux'
import {markComplete} from '../../../Controllers/Redux/bugSlice'
import EditPanel from '../edit delete/editPanel'
import EditBug from '../Bug Create/bugForm'

export default (props)=>{
    const dispatch = useDispatch();
    const bug = new BugModel(props.bug);

    const [displayEdit,setDisplayEdit]= useState(false);

    function editClicked(){
        setDisplayEdit(!displayEdit)
    }

    function deleteClicked(){

    }
    return(
        <>
        <div className="bug-view">
            <EditPanel editClicked={editClicked} deleteClicked={deleteClicked}/>
            <button onClick={props.clicked} className='close-btn'>Close</button>
            <h1>{bug.name}</h1>
            <ViewSection title = 'Details' info={bug.details} />
            <ViewSection title = 'Steps' info={bug.steps} />
            <ViewSection title = 'Priority' info={bug.priority} />
            <ViewSection title = 'Creator' info={bug.creator} />
            <ViewSection title = 'App Version' info={bug.version} />
            <ViewSection title = 'Bug type' info={bug.type} />
            <ViewSection title = 'Time Created' info={bug.time} />
            <button onClick={()=>{dispatch(markComplete(bug._id))}}>Mark Complete</button>
        </div>
        {displayEdit && <EditBug title="Edit Bug" bug={bug} close={editClicked}/>}
        </>
    )
}