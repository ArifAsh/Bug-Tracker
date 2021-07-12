import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {filter} from '../../../Controllers/Redux/bugSlice'
import BugCard from '../../Components/Bug Card/bugCard'
import BugView from '../../Components/Bug view/bugView'
import "./viewBugs.css"

export default() =>{

    function Search(){ 
    const searchBar = document.getElementById("search")
    searchBar.addEventListener('keyup',(e)=>{
   
    const searchString=e.target.value;
   
    const filterbugs=bugs.bug.filter((bug)=>{
        
        return( bug.name.toLowerCase().includes(searchString.toLowerCase()) )
    })
    dispatch(filter(filterbugs))
    SET_DISPLAY_BUG({
        searched : true,
        priority : DISPLAY_BUG.priority,
        name:DISPLAY_BUG.name,
        isDisplayed:DISPLAY_BUG.isDisplayed,
    })
    })}

    function Filter(){
        document.getElementById("myDropdown").classList.toggle("show");
    }
    function byPriority(priority){
        SET_DISPLAY_BUG({
            priority:priority
        })
    }

    function BugClicked(name){
       
        SET_DISPLAY_BUG({
            isDisplayed: !DISPLAY_BUG.isDisplayed,
            name: name,
            priority : DISPLAY_BUG.priority,
            searched : DISPLAY_BUG.searched,

        })
       
    }

    const [DISPLAY_BUG,SET_DISPLAY_BUG]= useState({
        name:"",
        isDisplayed:false,
        search : false,
        priority: 0,
    })
    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          let dropdowns = document.getElementsByClassName("dropdown-content");
          let i;
          for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

    return(
        <div className="Search">
        <input type="text" id="search" onClick={Search} placeholder="Search tickets.."></input>
        <div className="dropdown">
            <button onClick={Filter} className='dropbtn'>Filter</button>
   
            <div id="myDropdown" class="dropdown-content">
                <a onClick={()=>byPriority(0)}>Remove filter</a>
                <a onClick={()=>byPriority(1)}>High</a>
                <a onClick={()=>byPriority(2)}>Medium</a>
                <a onClick={()=>byPriority(3)}>Low</a>
                <a onClick={()=>byPriority(4)}>Completed</a>
            </div>
        </div>
        <div className='page-container' style={{width:"78%"}}>
       
            {bugs.filteredBugs.length === 0  && !DISPLAY_BUG.searched? bugs.bug.map((bug,key)=>(
                (DISPLAY_BUG.priority === 0 || DISPLAY_BUG.priority === bug.priority)  && < BugCard  key={key} bug={bug} clicked={()=>BugClicked(bug.name) } />
            )) :  bugs.filteredBugs.map((bug,key)=>(
                
                (DISPLAY_BUG.priority === 0 || DISPLAY_BUG.priority === bug.priority)  && <BugCard  key={key} bug={bug} clicked={()=>BugClicked(bug.name) } />
            ))}
            
            {DISPLAY_BUG.isDisplayed && <BugView clicked={BugClicked} bug={bugs.bug.filter((bug) => bug.name == DISPLAY_BUG.name)[0]} />}
        </div>
        </div>
    )
}
