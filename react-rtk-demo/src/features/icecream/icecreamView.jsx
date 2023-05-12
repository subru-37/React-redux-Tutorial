import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice';
export default function IcecreamView() {
  const numberOfIcecreams = useSelector(state=>state.icecream.numberOfIcecreams);
  const [value,setValue] = React.useState(1)
  const dispatch  = useDispatch();
  return (
    <div>
        <div>Number of Ice Creams: {numberOfIcecreams}</div>
        <button onClick={()=>dispatch(ordered())}>
            Buy Ice Cream 
        </button>
        <input type='number' value={value} onChange={(e)=>{setValue(parseInt(e.target.value))}}/>
        <button onClick={()=>dispatch(restocked(value))}>
            Restock Cakes
        </button>
    </div>
  )
}
