import React,{useState} from 'react'
import ViewSection from './component/bugViewSection'
import './bugView.css'
import BugModel from '../../../Models/bugModel'
import {useDispatch,useSelector} from 'react-redux'
import {markComplete,removeBug,getNewId} from '../../../Controllers/Redux/bugSlice'
import EditPanel from '../edit/editPanel'
import EditBug from '../Bug Create/bugForm'

export default (props)=>{
    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);
    const bug = new BugModel(props.bug);

    const [displayEdit,setDisplayEdit]= useState(false);

    function editClicked(){
        setDisplayEdit(!displayEdit)
    }

    function deleteClicked(){
        let currIndex = bug._id+1;
        const newBugIds = []
    
        while (currIndex < bugs.bug.length){
            const newBug = Object.assign({}, bugs.bug[currIndex]);
            newBug._id = currIndex-1;
            newBugIds.push(newBug)
            currIndex++
        }
        console.log(newBugIds)
        dispatch(removeBug(bug))
        dispatch(getNewId(newBugIds))
    }
    function markCompletedClicked(){
        dispatch(markComplete(bug));
        
    }
    return(
        <>
      
        <div className="bug-view">
            {displayEdit ? <EditBug title="Edit Bug" bug={bug} close={props.clicked}/> :
            <>
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
            {parseInt(bug.priority) !== 4 && <button onClick={markCompletedClicked }>Mark Complete</button>}
            </>
    }
        </div>
     
        </>
    )
}