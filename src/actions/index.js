import axios from 'axios';
import { url, headers } from '../config';
import { LOGIN, LOGOUT, FETCHLEVEL } from '../types'

export const userAction = (token, payload, login) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN,
            payload,
            login,
            token
        })
    }
}

export const loginAction = (token, payload) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN,
            token: token,
            login: true,
            payload
        })
    }
}

export const logoutAction = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT,
            token: null,
            login: false,
            payload: null
        })
    }
}

export const fetchLevelAction = (token) => {
    axios.get(url + "/api/user/level", headers(token))
        .then(res => {
            const { level, newPoint, treshold } = res.data
            return (dispatch) => {
                dispatch({
                    type: FETCHLEVEL,
                    level,
                    newPoint,
                    treshold
                })
            }
        })

}

