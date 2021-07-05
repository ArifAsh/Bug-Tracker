import React from 'react';
import { Doughnut} from 'react-chartjs-2';
import {useSelector} from 'react-redux'


export default()=>{
  const bugs = useSelector(state=>state.bugs);  
  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;
  let training = 0;
  if(bugs!=undefined){        
      highCount = filterBugs(1).length;
      midCount = filterBugs(2).length;
      lowCount = filterBugs(3).length;
      training = filterBugs(4).length;  
    }
  function filterBugs(type){
    return bugs.filter((bug)=>{return bug.type == type})
  }
   
    const chartData={
      
      labels: ["Bug/Error","Feature Request","Other Comments", "Training/Document Request"],
      datasets:[
        {
          label: "Priority",
          data:[highCount,midCount,lowCount,training],
          backgroundColor:["#b33a3a","#FFA500","#32cd32","#04009A"]
        }
      ],
   
    }
   return(
     <div style={{backgroundColor: "#b5b3b1"}} >  
         <Doughnut 
          data={chartData}
          height={400}
          width={520}
          options={{
            maintainAspectRatio: false ,
              plugins:{
                title:{
                display: "true",
               
                position:'top',
                fontSize: 60,
                },
                legend:{
                display: true,
                position: 'bottom',
                }
          }}
        }
        />
     </div>
   )
  }


