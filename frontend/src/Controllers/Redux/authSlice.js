import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"auth",
    initialState: {
        LoggedIn:false,
        admin:false,
        role: "",
        fullName: "",
        demo: true
    
    },
    reducers:{
        signIn:(state,action)=>{
            console.log(action.payload)
            const {fullName,admin,role,demo} = action.payload;
            state.fullName = fullName;
            state.LoggedIn = true;
            state.admin = admin;
            state.role = role;
            state.demo = demo;
        },
        signOut:(state)=>{
            state.LoggedIn = false;
            state.admin = false;
        },
        createUser:(state,action)=>{
            
        }
    }
})

export default slice.reducer;
export const {signIn,signOut,createUser} = slice.actions;