import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        data : []
    },
    reducers:{
      
       addToCart : (state, action)=>{
        state.data.push(action.payload)
       },

       removeFromCart : (state,action) => {
            state.data = state.data.filter(ele => ele.id !== action.payload)
       }

       ,
       increaseQuantity : (state, action) =>{
          state.data.forEach(ele=>{
                if(ele.id === action.payload)
                    ele.quantity += 1
            })
       },


       decreaseQuantity : (state, action) =>{
       let removed = false
       state.data.forEach(ele=>{
            if(ele.id === action.payload)
                {
                    if(ele.quantity > 1)
                        ele.quantity -= 1;
                    else
                        removed = true
                }

        })
        if(removed){
            state.data = state.data.filter(ele => ele.id !== action.payload)
        }
   },

     
    }

})

export const {addToCart,removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer