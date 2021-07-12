import {createSlice} from '@reduxjs/toolkit'
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

        filter:(state,action) =>{
            return {...state, filteredBugs : [...action.payload]};
        },

        createBugs:(state,actions)=>{

        },
        updateBug:(state,actions) =>{

        },
        markComplete:(state,action)=>{
    
            const index = state.bugs.findIndex(
                (bug) => bug.id === action.payload._id
              );
              state.bugs[index].priority = 4;
        

        }
    }
})
export default slice.reducer;
export const {getBugs,filter,createBugs,updateBug,markComplete} = slice.actions