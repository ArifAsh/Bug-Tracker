import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Card from '../../Components/Dashboard/card'
import BarChart from './Charts/barchart'
import Doughnut    from './Charts/doughnut'
import {getBugs} from '../../../Controllers/Redux/bugSlice'
import './dashboard.css'


export default () =>{
    const dispatch = useDispatch();
    const bugs = useSelector(state=>state.bugs);
    const browserHistory = useHistory();
    function redirect(){
        browserHistory.push('/viewbugs');
    }
    useEffect(()=>{
        dispatch(getBugs())
    },[bugs==undefined])



return(
        
        <div className="dash-container"  >

            <div className="chart" onClick={redirect} >
                <BarChart onClick={redirect} />
                <h3>Tickets by Priority</h3>
            </div>
            <div className="chart" onClick={redirect} >
                <Doughnut onClick={redirect}/>
                <h3>Tickets by type</h3>
            </div>
            
           
           
            
        </div>

     

)
}
