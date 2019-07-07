/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import types from '../types';
import general from './general';
import settings from './settings';
import lang from './lang';
import auth from './auth';

const generalReducers = () => {
  const services = {}
  Object.entries(types).forEach(type => {
    services[type[0]] = general(type[1].toUpperCase());
  })
  return services;
}

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
  // Wrap the root reducer and return a new root reducer with router state
export default combineReducers({
      settings,
      lang,
      form,
      auth,
      ...generalReducers()
    })
