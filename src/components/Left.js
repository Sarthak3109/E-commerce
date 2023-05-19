import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addToCart, removeFromCart} from '../redux/action_reducer/cartSlice'
import CartRow from './cartrow';
const Left = () => {
    const dispatch = useDispatch()
    const myCart = useSelector(state => state.cart.data)
    
  return (
    <div className='w-[50vw] mr-[5%] ml-[5%] mt-[8vh] bg-[white] h-[10%] rounded-md	left'>
        <div className='header p-[2%]  shadow-lg shadow-black-500/50'> Cart - {myCart.length} Items </div>


        <div>
            {
                myCart.map(ele=>{
                    return (
                        <CartRow quantity = {ele.quantity} price= {ele.price} img = {ele.image} name = {ele.name} id = {ele.id}/>

                    )
                })
            }
        </div>
        </div>
  )
}

export default Left