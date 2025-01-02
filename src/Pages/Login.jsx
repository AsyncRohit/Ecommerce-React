import { all } from 'axios'
import React, { useState } from 'react'

import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [allUsers, setAllUsers] = useState([])

    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault()
        if(password===confirmPassword){
            var arr=[...allUsers,{username,email,password,confirmPassword}]
            setAllUsers(arr);
            setConfirmPassword('')
            setPassword('')
            setEmail('')
            setusername('')
            navigate('/', { state: { allUsers: arr } });
        }
        else{
            alert("enter same password")
        }

    }
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex flex-col gap-6 w-96 p-6 bg-white shadow-lg rounded-md'>
        <div className='flex flex-col'>
          <label className='text-lg font-medium text-gray-700 mb-2'>Enter Username</label>
          <input 
          onChange={(e)=>{
            setusername(e.target.value)
            console.log(e.target.value);
          }}
            type="text"  
            placeholder='Enter Username' 
            value={username}
            className='px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-lg font-medium text-gray-700 mb-2'>Enter Email</label>
          <input 
          onChange={(e)=>{
            setEmail(e.target.value)
            
            console.log(e.target.value);
          }}
          value={email}  
          type="email"  
            
            placeholder='Enter Email' 
            className='px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-lg font-medium text-gray-700 mb-2'>Enter Password</label>
          <input 
           onChange={(e)=>{
            setPassword(e.target.value)
            
            console.log(e.target.value);
          }}
          value={password}  
            type="password"  
            placeholder='Enter Password' 
            className='px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-lg font-medium text-gray-700 mb-2'>Confirm Password</label>
          <input 
           onChange={(e)=>{
            setConfirmPassword(e.target.value)
            
            console.log(e.target.value);
          }}
          value={confirmPassword}  
            type="password"  
            placeholder='Confirm Password' 
            className='px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
          />
        </div>

        <button 
          type="submit"
          className='mt-6 px-4 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
