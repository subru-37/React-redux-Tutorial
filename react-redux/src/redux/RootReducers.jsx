import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./icecream/IceCreamReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({cake: CakeReducer, iceCream: IceCreamReducer})
export default rootReducer;