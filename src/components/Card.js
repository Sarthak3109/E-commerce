import React,{useState,useEffect} from 'react'
import { Card, Text, CardHeader,Image, Stack, Header, Divider, ButtonGroup, Button, Heading,CardBody, CardFooter } from '@chakra-ui/react'
import { ColorRing } from 'react-loader-spinner'
import {addToCart, removeFromCart} from '../redux/action_reducer/cartSlice'
import { useSelector, useDispatch } from 'react-redux';

const ItemCard = (props) => {
    const myCart = useSelector(state=>state.cart.data)
    const page= useSelector(state => state.page.value)
    const dispatch = useDispatch()
    const [buttonText, setbuttonText] = useState('Add To Cart')
    const [color, setcolor] = useState('blue')
    let [load, setload] = useState(true)
    const [imageSrc, setImageSrc] = useState(props.image);
    const handleImageError = () => {
        setImageSrc(props.altimage);
      };

     const HandleUpdate = (e)=>{
            if (buttonText === 'Add To Cart'){
                setbuttonText('Remove From Cart')
                setcolor('red')
                dispatch(addToCart({
                    id : props.id,
                    name : props.title,
                    quantity : 1,
                    price : props.price, 
                    image : props.image

                }))
            }

            else{
                setbuttonText('Add To Cart')
                setcolor('blue')
                dispatch(removeFromCart(props.id))
            }

           
     }

    //  useEffect(()=>{
    //      console.log("rendered")
    //     if(myCart.find(ele => ele.name === props.title))
    //         {setbuttonText('Remove From Cart') 
    //         setcolor('red')  }



    //  },[page])
  return (
    <div className='m-[20px] '>

       
<Card className = 'w-[25vw]  bg-[red] hover:scale-[1.05] transtion ease-in-out duration-150 card' >
  <CardBody>
    <div className='hover:scale-110 transtion ease-in-out duration-150'>
    {load ? <Image
      src={props.image}
      onError={()=>{
        setload(false)
      }}
      alt = "image not available"
      borderRadius='lg'
    />

    :
      
    <div className='flex justify-center items-center'>
  <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
  </div>
    }

    </div>
    <Stack mt='3'>
      <Heading size='md'>{props.title}</Heading>
      
      <Text color='blue.600' fontSize='2xl'>
        ${props.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter >
    
     {
        myCart.find(ele => ele.id === props.id) ? 

      <Button  colorScheme='red' className ='text-[1px]' onClick={(e)=>HandleUpdate(e)}>
        REMOVE FROM CART
      </Button>
      :
      <Button  colorScheme='blue' className ='text-[1px]' onClick={(e)=>HandleUpdate(e)}>
      ADD TO CART
    </Button>
     }
 
  </CardFooter> 
</Card>
    </div>
  )
}

export default ItemCard