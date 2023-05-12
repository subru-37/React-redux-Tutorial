import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyIcecream } from '../redux/icecream/IceCreamAction'
export default function HooksIcecreamContainer() {
  const numberOfIcecreams = useSelector(state=>state.iceCream.numberOfIcecreams)
  const dispatch = useDispatch()
    return (
    <div>
        <h2>
            Number of IceCreams: {numberOfIcecreams} 
        </h2>
        <button onClick={()=>dispatch(buyIcecream())}>Buy Cake</button>
    </div>
  )
}
