/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, View} from "react-native";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Navigator from './Navigation';
import { setNavigator } from './GlobalNavigator';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 


export default class App extends Component {
    
    render() {
        return (
          <Provider store={store}>
            <Navigator ref={nav => { setNavigator(nav); }}/>
          </Provider>
        );
      }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
