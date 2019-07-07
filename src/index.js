import React, {Component} from 'react';
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import Router from "./router";
import { store, persistor } from './redux/store';
import  stringLanguages from './utils/stringLanguages';

export default class App extends Component {
  componentDidMount(){
    stringLanguages.setLanguage('id')
  }

  render() {


    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>

    );
  }
}