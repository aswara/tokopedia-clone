import { LOGIN, LOGOUT, FETCHLEVEL } from '../types'
import { combineReducers } from 'redux'

const initialState = {
    token: '',
    user: '',
    login: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                token: action.token,
                data: action.payload,
                login: action.login
            }
        case LOGOUT:
            return {
                token: action.token,
                data: action.payload,
                login: action.login
            }
        default:
            return state
    }
}

const levelState = {
    level: 0,
    newPoint: 0,
    treshold: 100
}

const levelReducer = (state=levelState, action) => {
    switch(action.type) {
        case FETCHLEVEL:
            return {
                level: action.level,
                newPoint: action.newPoint,
                treshold: action.treshold
            }
        default:
            return state
    }
}

export default combineReducers({ userReducer, levelReducer })