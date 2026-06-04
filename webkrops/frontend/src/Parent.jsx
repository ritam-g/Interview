import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { addUser } from './state/authSlice'

const Parent = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>hello</h1>
            <h1
            onClick={()=>{dispatch(addUser("rockey"))}}
            >{user}</h1>
            <Outlet />
        </div>
    )
}

export default Parent
