import React from 'react';
import { NativeRouter } from "react-router-native";
import App from './App.js';


import {AppRegistry} from 'react-native';
import App from './app/App';

AppRegistry.registerComponent('Whale Sighting App', () => App);


  <NativeRouter>
    <App/>
  </NativeRouter>