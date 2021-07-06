import React from 'react';
import { Bar} from 'react-chartjs-2';
import {useSelector} from 'react-redux'



export default()=>{
  const bugs = useSelector(state=>state.bugs);  
  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;
  let completeCount = 0;
  if(bugs!=undefined){        
      highCount = filterBugs(1).length;
      midCount = filterBugs(2).length;
      lowCount = filterBugs(3).length; 
      completeCount =  filterBugs(4).length; 
    }
  function filterBugs(priority){
    return bugs.filter((bug)=>{return bug.priority == priority})
  }
   
    const chartData={
      
      labels: ["High","Medium","Low","Completed"],
      datasets:[
        {
          
          data:[highCount,midCount,lowCount,completeCount],
          backgroundColor:["#410000","#a30000","#ff0606","#00FF00"], 
          borderColor: 'rgba(75,192,192,1)',
        }
      ]
    }
   return(
     <div  style={{backgroundColor: "#b5b3b1"}}>
       
       <Bar
          data={chartData}
          height={350}
          width={520}
	        
          options={{
            maintainAspectRatio: false ,
            plugins:{
              title:{
                display:true,
                
                fontSize:50,
                position:'top',
           
              },
              legend:{
                display: false,
                
              },
         
          }}
        }
        />
     </div>
   )
  }




