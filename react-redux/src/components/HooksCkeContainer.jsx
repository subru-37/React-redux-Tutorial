import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/CakeAction'
export default function HooksCkeContainer() {
  const numberOfCakes = useSelector(state=>state.cake.numberOfCakes)
  const dispatch = useDispatch()
    return (
    <div>
        <h2>
            Number of cakes: {numberOfCakes} 
        </h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}
