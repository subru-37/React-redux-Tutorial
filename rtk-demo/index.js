const store = require('./app/store')
const cakeActions =  require('./features/cake/cakeSlice').cakeActions
const icecreamActions =  require('./features/icecream/icecreamSlice').icecreamActions
console.log('Initial Staate: ',store.getState())
const fetchUsers = require('./features/user/userSlice').fetchUsers

const unsubscribe = store.subscribe(()=>{
    console.log('updated state', store.getState())
})
// const unsubscribe = store.subscribe(()=>{
// })
store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(3))
// unsubscribe()