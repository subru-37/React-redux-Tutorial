import React from 'react'
import { buyCake } from '../redux/cake/CakeAction'
import { connect } from 'react-redux'
export function CakeContainer(props) {
  return (
    <div>
        <h2>
            Number of Cakes = {props.numberOfCakes}
        </h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: ()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)