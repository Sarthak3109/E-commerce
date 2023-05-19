import React from 'react'
import ItemCard from './Card'
import { Audio } from 'react-loader-spinner'
import { useEffect , useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/action_reducer/pageslice';

import Pagination from './Pagination';

const FRONT_PAGE = () => {
  const page = useSelector((state) => state.page.value);
  const [isLoading, setIsLoading] = useState(true);

  const [data, setdata] = useState([]);
  useEffect(()=>{
    fetch(`https://api.escuelajs.co/api/v1/products?offset=${page*10}&limit=10`).
    then(response=>response.json()).
    then((response) => {setdata(response)
      setIsLoading(false)
    })
    

  }, [page])








  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 min-h-[90vh]'>
        {isLoading ? 
              (
                <div className='h-[90vh] flex justify-center items-center'>
                <Audio
              height="100"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
            </div>

              )
      :
         ( <>
        <div className='flex justify-center items-center flex-wrap front_page'>
     
       {
        data.map(ele =>{
          return (
           
            <ItemCard id = {ele.id} title = {ele.title} image = {ele.images[0]}  price = {ele.price}/>
          )
        })
       }

        </div>

        <div>
          <Pagination />
        </div>
        </>)
     
      }



    </div>
  )
}

export default FRONT_PAGE