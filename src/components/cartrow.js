import React from 'react'
import { GoArchive } from "react-icons/go";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/action_reducer/cartSlice';
import { increaseQuantity, decreaseQuantity } from '../redux/action_reducer/cartSlice';
import { Input } from '@chakra-ui/react'
const CartRow = (props) => {
    let dispatch = useDispatch()
    let myCart =  useSelector(state => state.cart.data)
  return (
    <div className='flex justify-center  text-center h-[30vh] shadow-lg shadow-black-500/50 cartRow pr-3'>
        <div className='flex-1 m-3 rounded-md image' style = {
            {
                backgroundImage : `url(${props.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
        }>
        
        </div>
        <div className = 'mobile flex-1 flex flex-col space-between'>
          
        <div className='flex-1 text-left pt-[2%]   secondlast font-semibold flex justify-between gap items-center'>
            <div>
        {props.name}
        </div>


        <div >
        <button onClick = {()=>{dispatch(removeFromCart(props.id))}}>
            <GoArchive className='text-[red] mt-[3%]' /></button>
        </div>
        </div>
       

        
        <div className='flex-1  pt-4 space-x-2     mt-2 mr-3 text-center last'>
            <div className='flex justify-between items-center'>
        <Button colorScheme='blue' size = 'sm'
        onClick = {()=>{dispatch(decreaseQuantity(props.id))}}
        >-</Button>
        <Button colorScheme='teal' variant='outline' className='w-[60%] px-2' disabled={true}>
        {props.quantity}
  </Button>
        <Button colorScheme='blue' size = 'sm'
         onClick = {()=>{dispatch(increaseQuantity(props.id))}}
        >+</Button>
        </div>
        <div>
            {props.price}
        </div>
        </div>
    </div>
       
    </div>
  )
}

export default CartRow