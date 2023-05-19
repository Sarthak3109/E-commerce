import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from './action_reducer/cartSlice'
import pageReducer from './action_reducer/pageslice'

export default configureStore({
  reducer: {
    page : pageReducer,
    cart : cartReducer
  },
})