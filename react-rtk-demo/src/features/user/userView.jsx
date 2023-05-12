import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'
export default function UserView() {
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(fetchUsers())
  },[])
  return (
    <div>
        <div>User Details: </div>
        <div>{
            user.loading ? <div>Loding...</div> : user.error ? <div>Error: {user.error}</div> : <ul>
              {
                user.users.map(user=> (<li key={user.id}>{user.name}</li>))
              }
            </ul>
          }</div>
        <button>Retrieve details</button>
    </div>
  )
}
