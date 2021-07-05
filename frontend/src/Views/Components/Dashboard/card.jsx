import React from 'react'
import './card.css'
import Priority from '../../../Controllers/priorityController'

export default (props)=>{
    const {level,color} = Priority(props.priority);
    const style = {
        height: props.count * 20,
        backgroundColor: color,
    }
    return(
        <div className='dashboard-card' onClick={props.clicked} >
            <p>{level}</p>
            <p style={style}>{props.count}</p>
        </div>
    )
}