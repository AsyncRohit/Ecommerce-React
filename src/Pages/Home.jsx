import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
  

import {Route,Routes} from 'react-router-dom'


const Home = () => {
    
  const [data, setData] = useState([])

  const [carditems, setCarditems] = useState([])
  const [cartStatus, setCartStatus] = useState([])
  const [searchQuery, setSearchQuery] = useState(''); // Track search input
  const [filteredData, setFilteredData] = useState([]); // Store filtered suggestions



  const GetData= async()=>{
    const response =  await axios.get('https://fakestoreapi.com/products');
    setData(response.data)
    console.log(response.data);
  }

const AddCart=(index)=>{
    const arr=[...carditems,data[index]]
    setCarditems(arr);
    const newStatus = [...cartStatus];

    if (newStatus[index] === 'Added') {
      newStatus[index] = 'Removed'; // If already added, change to 'Removed'
    } else {
      newStatus[index] = 'Added'; // If not in cart, add it
    }
    console.log(arr);
    setCartStatus(newStatus)


}

 // Handle search query change
 const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update the search query
    if (query === '') {
      setFilteredData([]); // Clear filtered data when input is empty
    } else {
      // Filter products based on the search query
      const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
      );
      setFilteredData(filteredProducts); // Update filtered suggestions
    }
  };

  useEffect(function(){
    GetData();
  },[])
  return (


    <div className='h-screen w-full '>
             {/* Search Input */}
      <div className="search-container p-8 outline-none">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
          placeholder="Search for a product..."
        />

        {/* Show suggestions if there are any */}
        {filteredData.length > 0 && (
          <div className="suggestions mt-2 p-4 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {filteredData.map((product, index) => (
              <div key={index} className="suggestion-item p-2 hover:bg-gray-100 cursor-pointer">
                <h3>{product.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
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
          className='px-6 py-4 bg-yellow-400 text-xl font-bold text-black  outline-none rounded-md  w-40 '>{cartStatus[index] === 'Added' ? 'Remove' : 'Add To Cart'}</button>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Home