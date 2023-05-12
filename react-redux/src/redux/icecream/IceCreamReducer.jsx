import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
    numberOfIcecreams : 20
}

export default function IceCreamReducer(state = initialState,action) {
    switch(action.type){
        case BUY_ICECREAM:
            console.log(state)
            return{
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1
            }
            default: 
                return state
    }
}
