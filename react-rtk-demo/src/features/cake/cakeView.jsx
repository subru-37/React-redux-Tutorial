import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
export default function CakeView() {
  const numberOfCakes =  useSelector(state=>state.cake.numberOfCakes)
  const dispatch  = useDispatch();
  return (
    <div>
        <div>Number of Cakes: {numberOfCakes}</div> 
        <button onClick={()=>dispatch(ordered())}>Buy Cake </button>
        <button onClick={()=> dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  )
}
