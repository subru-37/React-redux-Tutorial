const redux = require('redux')
const bindactionCreators = redux.bindActionCreators
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICEC = 'BUY_ICEC'
const RESTOCK_CAKE = 'RESTOCK_CAKE'
const RESTOCK_ICEC = 'RESTOCK_ICEC'
const combineReducers = redux.combineReducers
function buyCake(){
    return{
        type: BUY_CAKE,
        payload: 1
    }
}
function buyIceC(){
    return{
        type: BUY_ICEC,
        payload: 1
    }
}
function reStockC(qty = 1){
    return{
        type: RESTOCK_CAKE,
        payload: qty
    }
}
function reStockI(qty=1){
    return{
        type: RESTOCK_ICEC,
        payload: qty
    }
}
// const initialState = {
//     numOfCakes:10,
//     numOfIceC: 20
// }
const initialCakeState = {
    numOfCakes:10
}
const initialIceState = {
    numOfIceC:10
}
// const reducer = (state = initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:
//             return{
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case BUY_ICEC:
//             return{
//                 ...state,
//                 numOfIceC: state.numOfIceC - 1
//             }
//             default: state
//     }
// }
const cakeReducer = (state = initialCakeState,action)=>{
    switch(action.type){
                case BUY_CAKE:
                    console.log(state)
                    return{
                        ...state,
                        numOfCakes: state.numOfCakes - 1
                    }
                case RESTOCK_CAKE:
                    return{
                        ...state,
                        numOfCakes: state.numOfCakes + action.payload
                    }
                    default: state
}
}
const iceCReducer = (state = initialIceState,action)=>{
    switch(action.type){
                case BUY_ICEC:
                    return{
                        ...state,
                        numOfIceC: state.numOfIceC - 1
                    }
                case RESTOCK_ICEC:
                    return{
                        ...state,
                        numOfIceC: state.numOfIceC + action.payload
                    }
                    default: state
}
}
// const store = createStore(reducer)
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCReducer
})
const store = createStore(rootReducer)
console.log('Initial state ', store.getState())
const unsubscribe = store.subscribe(()=> console.log('updated state: ',store.getState()))
const action = bindactionCreators({buyCake,buyIceC,reStockI,reStockC},store.dispatch)
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceC())
// store.dispatch(buyIceC())
// store.dispatch(buyIceC())
action.buyCake()
action.buyCake()
action.buyIceC()
action.buyIceC()
action.reStockI()
action.reStockC()

console.log('Initial state ', store.getState())

unsubscribe()