import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
// import reduxLogger from 'redux-logger'
// const logger = reduxLogger.createLogger()
import userReducer from '../features/user/userSlice'
// const fetchUser = require('../features/user/userSlice').fetchUser
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
export default store;