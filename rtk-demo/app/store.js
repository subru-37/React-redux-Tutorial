const configureStore = require('@reduxjs/toolkit').configureStore
const { getDefaultMiddleware } = require('@reduxjs/toolkit')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const userReducer = require('../features/user/userSlice')
// const fetchUser = require('../features/user/userSlice').fetchUser
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})
module.exports = store