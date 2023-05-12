const redux = require('redux')
const thunkMiddleWare = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const initialState = {
    loading: true,
    users: [],
    error:''
}
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUserReqest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = () =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = () => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS_REQUEST: 
        return{
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
                return{
                    ...state,
                    loading: false,
                    users: [],
                    error: action.payload
                }
    }
}
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserReqest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const user = response.data.map((user)=>(user.id))
            dispatch(fetchUserSuccess(user))
        })
        .catch(error => {
            dispatch(fetchUserFailure(error.message))
        })
    }
}
const store = createStore(reducer,applyMiddleware(thunkMiddleWare))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers)
