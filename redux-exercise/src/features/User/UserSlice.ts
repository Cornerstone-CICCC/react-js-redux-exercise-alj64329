import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type State={
    firstname:string,
    lastname:string,
    age:number
}

const initialState:State={
    firstname:"",
    lastname:"",
    age:0
}

export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        incrementAge:(state)=>{
            state.age+=1
        },
        setFirstname:(state, action:PayloadAction<string>)=>{
            state.firstname = action.payload
        },
        setLastname:(state, action:PayloadAction<string>)=>{
            state.lastname = action.payload
        }
    }
})

export const {incrementAge,setFirstname, setLastname} = UserSlice.actions

export default UserSlice.reducer