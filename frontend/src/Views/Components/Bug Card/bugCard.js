import React from 'react'
import './bugCard.css'
import PriorityController from '../../../Controllers/priorityController'

export default (props)=>{
    const {name,priority,type} = props.bug;
    const {level,color,ticket} = PriorityController(priority,type);
    function Clicked(){
        props.clicked(props.name);
    }
    return(
        <div className="container">
            <div className='bug-card' onClick={Clicked}> 
                <h2 className='name' style={{backgroundColor:"#FFFFFF",color:color}}>{level}</h2>
                <h2 className='priority'> {name}</h2>
                <h4 className='type'>{ticket}</h4>
            </div>
        </div>
    )
}