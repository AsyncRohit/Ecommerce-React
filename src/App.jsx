import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'

import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Login from './Pages/Login'

const App = () => {

  return (
   

    <div className='h-screen w-full '>
             <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>
  
    </div>
  )
}

export default App