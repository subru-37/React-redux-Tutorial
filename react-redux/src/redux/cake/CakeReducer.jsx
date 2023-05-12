import { BUY_CAKE } from './CakeTypes';

const initialState = {
    numberOfCakes: 10
}

export default function CakeReducer(state = initialState,action) {
    switch(action.type){
        case BUY_CAKE:
            console.log(state);
            return{
                ...state,
                numberOfCakes: state.numberOfCakes -1
            }
        default: 
            return state
    }
}
