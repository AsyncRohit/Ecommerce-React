import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'

import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

const App = () => {

  return (
   

    <div className='h-screen w-full '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
  
    </div>
  )
}

export default App