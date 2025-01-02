import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
  

import {Route,Routes} from 'react-router-dom'


const Home = () => {
    
  const [data, setData] = useState([])

  const [carditems, setCarditems] = useState([])
  const [cartStatus, setCartStatus] = useState([])



  const GetData= async()=>{
    const response =  await axios.get('https://fakestoreapi.com/products');
    setData(response.data)
    console.log(response.data);
  }

const AddCart=(index)=>{
    const arr=[...carditems,data[index]]
    setCarditems(arr);
    const newStatus = [...cartStatus];
    newStatus[index] = 'Added'; // Mark the button as "Added" for this specific item
    setCartStatus(newStatus);
    console.log(arr);


}

  useEffect(function(){
    GetData();
  },[])
  return (

    <div className='h-screen w-full '>
    <div className='products bg-white w-full grid grid-cols-4 p-8 gap-10'>
      {data.map((elem,index)=>(
        <div key={index} className='Card bg-white  text-center  px-10 border-2 border-black py-10'>
         <img src={elem.image} alt='' className=" h-60 w-60 mx-auto object-contain " />
          <h3 className='text-center font-bold mt-10 text-xl mb-10'>{(elem.title.toString().substring(0,20).trim())}....</h3>
          <p className='text-center mb-10'>{(elem.description).toString().substring(0,50).trim()}</p>
          <p className='text-center font-semibold text-2xl mb-10' >{`$${elem.price}`}</p>
          <button 
          onClick={()=>{
            AddCart(index)
          }}
          className='px-6 py-4 bg-yellow-400 text-xl font-bold text-black  outline-none rounded-md  w-40 '>{cartStatus[index] === 'Added' ? 'Added' : 'Add To Cart'}</button>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Home