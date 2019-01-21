import React, { Component } from 'react';
import Router from './src/router';
import reducers from './src/reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App;

