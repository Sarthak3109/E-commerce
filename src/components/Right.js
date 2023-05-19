import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Right = () => {
    let myCart = useSelector(state => state.cart.data)
    const calcPrice = ()=>{
        
        return myCart.reduce((acc,ele)=>{
            acc  = acc + (ele.quantity)*(ele.price)
        }, 0)
    }
    let [TotalPrice, setTotalPrice] = useState(0)
    let [TotalQty, setTotalQty] = useState(myCart.length)
    useEffect(()=>{
        let sum  = 0;
        let qty = 0
       myCart.forEach(ele=>{
        sum += ele.price * ele.quantity
        qty += ele.quantity
       })
       setTotalPrice(sum)   
       setTotalQty(qty)

    }, [myCart])
  return (
    <div className=' h-[30vh] w-[28vw] bg-[white] mt-[8vh] mr-[5%] rounded-md text-sm flex flex-col justify-between right'>
    
    <div className='header p-[2%]  shadow-lg shadow-black-500/50'> Summary</div>



    <div className='mt-[8%]'>
    <div className = 'flex justify-between items-center w-[80%] m-[auto]'>
    <div >TOTAL QUANTITY</div>    
    <div>{TotalQty}</div>    

    </div>  

    <div className = 'flex justify-between items-center w-[80%] m-[auto]'>
    <div >TOTAL PRICE</div>    
    <div>{ TotalPrice}</div>    

    </div>  


    </div>

 
    <Link to = '../'  className='mt-[5%] w-[80%]  mx-auto flex justify-center mb-[5%]'>
        <Button colorScheme='blue' size='sm' className = 'w-[100%]' >GO TO CHECKOUT </Button>
        </Link>
   
    </div>
  )
}

export default Right