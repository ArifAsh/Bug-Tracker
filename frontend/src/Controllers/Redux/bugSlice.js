import {createSlice} from '@reduxjs/toolkit'
import bug from '../../Models/bugModel';
import login from '../../Views/Pages/Login/login';
import {retrieveBugs} from '../bugController'

const slice = createSlice({
    name:"bugs",
    initialState: {
        filteredBugs : [],
        bug: retrieveBugs(),
    },
    reducers:{
        getBugs:(state) => {
            return state.bugs
        },
        removeBug:(state,action)=>{
            const index = action.payload._id;
            return{
                ...state,
                bug: [...state.bug.slice(0,index)]
               
            }
        },
        getNewId: (state,action)=>{
            
        
            return{
                ...state,
                bug: [...state.bug, ...action.payload],
        
        }
        },
        filter:(state,action) =>{
            return {...state, filteredBugs : [...action.payload]};
        },

        createBugs:(state,action)=>{
          
        return {
            ...state,
            bug: [...state.bug,...action.payload]
        }
        },
        updateBug:(state,action) =>{
            const index = action.payload._id;
            return {
                ...state,
                bug: [...state.bug.slice(0,index),action.payload,...state.bug.slice(index+1)],
              
            }
        },
        markComplete:(state,action)=>{
    
            const index =action.payload._id;
           
            action.payload.priority = 4
            
            return {
                ...state,
                bug: [...state.bug.slice(0,index),action.payload,...state.bug.slice(index+1)]
            }
            
        

        }
    }
})
export default slice.reducer;
export const {getBugs,removeBug,filter,createBugs,updateBug,markComplete,getNewId} = slice.actions