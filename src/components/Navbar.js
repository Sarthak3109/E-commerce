import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='h-[10vh] flex flex-row justify-between items-center  bg-slate-100 font-bold '>
        <div className='ml-[4%]'><Link to = '/'> All Products</Link></div>
        <div className='mr-[4%]'> <Link to ='/order'>
            Cart
            </Link>
        </div>
    </div>
  )
}

export default Navbar