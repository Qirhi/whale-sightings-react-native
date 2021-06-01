import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import theme from './CustomProperties/Themes';


// import components
import Landing from './Components/Landing';
import AppBar from './Components/Appbar';
import SelectSpeciesImage from './Components/SelectSpeciesImage';
import SelectSpeciesButtons from './Components/SelectSpeciesButtons';
import TextInputSection from './Components/TextInputSection';
import Sightings from './Components/Sightings';

// import views
import Splash from './views/Splash';
import Home from './views/Home';


import axios from 'axios';

 

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { appReducer } from './reducers/index';

import { NativeRouter, Route, Switch, Link } from "react-router-native";


//import reducer from our reducer file
// import reducer from './reducer';
//import your action creators used by dispatchers to alter your global state.
// import { fetchData, fetchDataFulfilled, fetchDataRejected } from './reducer';

import { Provider } from 'react-redux';
import { SelectSpecies } from './actions';
//import your store
// import store from './redux/store';
// import registerServiceWorker from './registerServiceWorker';



const store = createStore(appReducer, applyMiddleware(logger,thunk));

const App = () => {
  const [species, setSpecies] = useState([]);



  const image = { uri: "https://cdn.pixabay.com/photo/2015/11/02/18/32/water-1018808_1280.jpg" };

  return (
    <Provider store={store}>
        
            <ScrollView contentContainerStyle={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>
            {/* <ScrollView > */}

                <NativeRouter>
                  {/* <SafeAreaView>   */}
                    <PaperProvider theme={theme}>
                        {/* <View style={styles.container}> */}
                        <Switch>

                          <Route exact path="/home" component={Splash} />
                          <Route path="/" component={Home} />

                          </Switch>
                        {/* </View> */}
                    </PaperProvider>
                    {/* </SafeAreaView> */}
                </NativeRouter>
            </ScrollView>
        
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
//   backgroundContainer: {
//     flex: 1,
//     width: '100%',
//     // height: '100%',
//     height: '25%',
//     resizeMode: "center",
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
// },
// backgroundImage:{
//     flex : 1,
//     width : '100%'
// },
  scrollView: {
    backgroundColor: 'pink',
    flexDirection: 'column',
    // marginHorizontal: 20,
  },
  // tinyLogo: {
  //   width: 430,
  //   height: 380,

  // },
});

