/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import RemoteMonitorRouter from './src/routers/RemoteMonitorRouters'
import {createStore,combineReducers} from'redux'
import {Provider} from 'react-redux'
import loginreducer from './src/reducers/loginreducer'

const store = createStore(combineReducers({loginreducer}));

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store} >
        <RemoteMonitorRouter />
      </Provider>
    );
  }
}