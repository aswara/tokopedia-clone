import axios from 'axios';
import { persistor } from '../store';

/**
 * @param url -> string
 * @param value -> object { email, password }
 */
export const login = (url, value) => {
  return {
    type: 'LOGIN',
    payload: axios({
      url,
      method: 'POST',
      data: value
    })
  }
}

export const getUser = () => {
	const url = `${process.env.REACT_APP_URL}/api/v1/auth/me`
	return {
	    type: 'USER',
	    payload: axios({
	      url,
	      method: 'GET',
	    })
	}
}
