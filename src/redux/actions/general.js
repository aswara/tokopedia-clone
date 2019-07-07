import axios from 'axios';

import extrasUrl from '../../utils/extrasUrl';
/**
 * 
 * @param {string, type from '../types.js'} type 
 * @param {string} url 
 * @param {object} opt 
 */
export const find = (type, url, opt = null) => {
  // const { path } = extrasUrl(url);
  // url = `${process.env.REACT_APP_URL}/${path}`
  const token = opt && opt.token 
  return {
    type: `FIND_${type}`,
    payload: axios({
      url,
      method: 'GET',
      headers: token ? {
        'Authorization': `Bearer ${token}`
      } : null
    })
  }
}

/**
 * 
 * @param {string, type from '../types.js'} type 
 * @param {string} url 
 * @param {object} opt 
 */
export const loadmore = (type, url, opt = null) => {
  const { path } = extrasUrl(url);
  url = `${process.env.REACT_APP_URL}/${path}`
  return {
    type: `LOADMORE_${type}`,
    payload: axios({
      url,
      method: 'GET',
    })
  }
}

/**
 * 
 * @param {string, type from '../types.js'} type 
 * @param {string} url 
 * @param {object} data body 
 */
export const create = (type, url, data) => {
  // const { path } = extrasUrl(url);
  // url = `${process.env.REACT_APP_URL}/${path}`
  return {
    type: `CREATE_${type}`,
    module: type,
    payload: axios({
      url,
      method: 'POST',
      data,
    })
  }
}

/**
 * 
 * @param {string, type from '../types.js'} type 
 * @param {string} url 
 * @param {object} data body
 */
export const update = (type, url, data) => {
  // const { path } = extrasUrl(url);
  // url = `${process.env.REACT_APP_URL}/${path}/${data.id}`
  url = `${url}/${data.id}`
  return {
    type: `UPDATE_${type}`,
    module: type,
    payload: axios({
      url,
      method: 'PATCH',
      data,
    })
  }
}

/**
 * 
 * @param {string, type from '../types.js'} type 
 * @param {string} url 
 * @param {string} id 
 */
export const findId = (type, url, id) => {
  // const { path } = extrasUrl(url);
  // url = `${process.env.REACT_APP_URL}/${path}/${id}`
  url = `${url}/${id}`
  return {
    type: `FIND_ID_${type}`,
    payload: axios({
      url,
      method: 'GET',
    })
  }
}

/**
 * 
 * @param {string, type from '../types.js'} type 
 * @param {string} url 
 * @param {string} id 
 */
export const remove = (type, url) => {
  // const { path } = extrasUrl(url);
  // url = `${process.env.REACT_APP_URL}/${path}`
  return {
    type: `DELETE_${type}`,
    payload: axios({
      url,
      method: 'DELETE',
    })
  }
}

/**
 * 
 * @param {string, type from '../types.js'} type 
 * @param {string} url 
 */
export const filter = (type, url) => {
  // const { path } = extrasUrl(url);
  // url = `${process.env.REACT_APP_URL}/${path}`
  return {
    type: `FILTER_${type}`,
    payload: axios({
      url,
      method: 'GET',
    })
  }
}