import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../state/authSlice'
import { UseAuth } from '../context/AuthContext'

const Home = () => {
 const dispatch= useDispatch()
 const {user}=UseAuth()
  return (
    <div>
      i am home 
      <button onClick={()=>{
        dispatch(addUser(user))
      }}>click</button>
    </div>
  )
}

export default  Home
