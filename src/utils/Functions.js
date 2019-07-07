import axios from 'axios';
import { login, getUser } from '../redux/actions/auth';
import { store } from '../redux/store';

class Functions {
  /**
   * 
   * @param { type: object } token 
   */
  static registerToken(token) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${process.env.REACT_APP_URL}/api/register_token`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        data: token
      })
      .then(res => {
        if (res.status === 200)
          this.setSessionStorages(res.data);
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      })
    })
  }

  static setAxiosHeader() {
    const accessToken = sessionStorage.getItem('access_token');
    const tokenType = sessionStorage.getItem('token_type');
    if (accessToken && tokenType) {
      axios.defaults.headers.common['Authorization'] = `${tokenType} ${accessToken}`;
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      store.dispatch(getUser())
    }
  }

  static checkToken() {
    return new Promise((resolve, reject) => {
      axios({
        url: `${process.env.REACT_APP_URL}/api/check_token`,
        headers: {
          'Content-Type': 'application/json',
        },  
        method: 'GET'
      })
      .then(res => {
        if (res.status === 200)
          this.setSessionStorages(res.data);
        resolve(res);
      })
      .catch(err => {
        sessionStorage.clear();
        reject(err);
      })
    })
  }

  static logout() {
    return new Promise((resolve, reject) => {
      axios({
        url: `${process.env.REACT_APP_URL}/api/logout`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST'
      })
      .then(res => {
        if (res.status === 200)
          this.setSessionStorages(res.data);
        resolve(res);
      })
      .catch(err => {
        sessionStorage.clear();
        reject(err);
      })
    })
  }

  /**
   * 
   * @param { type: object } data 
   */
  static setSessionStorages(data) {
    if (!data) {
      sessionStorage.clear();
      delete axios.defaults.headers.common["Authorization"];
      delete axios.defaults.headers.post['Content-Type'];
      delete axios.defaults.headers.post['slug']
    } else {
      Object.keys(data).map(key => {
        sessionStorage.setItem(key, data[key]);
      });
      this.setAxiosHeader();
    }
  }


}

export default Functions;