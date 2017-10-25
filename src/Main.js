import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyAFrqW90MYchMIAv_3iF8nsa7UXo_96-A0",
    authDomain: "surrogate-c4351.firebaseapp.com",
    databaseURL: "https://surrogate-c4351.firebaseio.com",
    projectId: "surrogate-c4351",
    storageBucket: "",
    messagingSenderId: "846785535018"
    };

    firebase.initializeApp(config);

  }

  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
