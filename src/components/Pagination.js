import React, {useState, useEffect} from 'react'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../redux/action_reducer/pageslice';


const Pagination = () => {
    const dispatch = useDispatch()
    const page = useSelector((state) => state.page.value)
  return (
    <div className='flex justify-center items-center '>
        {page > 0 && 
        <button onClick={() => {dispatch(decrement());   console.log("clicked")}}><GoArrowLeft size = {50}/></button>
        }
        {page < 10 && 
         <button onClick={() => {dispatch(increment());   console.log(page)}}><GoArrowRight size = {50}/></button> 
        }
       
    </div>
  )
}

export default Pagination