import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-6 py-2 flex justify-between items-center  bg-gray-300 font-semibold text-xl postion-fixed top-0 left-0'>
<NavLink to={'/'}
className={'font-semibold'}
>
    Shopping.com
</NavLink>
        <input type="text"  placeholder='Search ' className='px-4 py-2 w-1/3  rounded-3xl outline-none'/>
<div className='flex gap-7'>
    <NavLink
    to={'/'}
    className={({isActive})=> isActive ? 'text-black font-bold' : 'text-gray-600  '}
    >Home</NavLink>
    <NavLink
    to={'/yourcart'}
    className={({isActive})=> isActive ? 'text-black font-bold' : 'text-gray-600  '}

    >Your Cart</NavLink>
    <NavLink
    to={'/about'}
    className={({isActive})=> isActive ? 'text-black font-bold' : 'text-gray-600  '}

    >About</NavLink>
    <NavLink
    to={'/login'}
    className={({isActive})=> isActive ? 'text-black font-bold' : 'text-gray-600  '}

    >Login</NavLink>
</div>
    </div>
  )
}

export default Navbar