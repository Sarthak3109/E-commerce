import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name : 'page',
    initialState : {
        value : 0
    },
    reducers:{
       increment : (state)=>{
        if(state.value < 10)state.value+=1
       },
       decrement : (state)=>{
        state.value = (state.value) > 0 ? state.value - 1 : 0;
       }

       
    }

})

export const {increment,decrement} = pageSlice.actions
export default pageSlice.reducer