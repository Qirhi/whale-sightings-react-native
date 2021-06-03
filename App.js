import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import theme from './CustomProperties/Themes';


// import components
import Landing from './Components/Landing';
import TopBar from './Components/TopBar';
import SelectSpeciesTitleBar from './Components/SelectSpeciesTitleBar';
import SelectSpeciesButtons from './Components/SelectSpeciesButtons';
import TextInputSection from './Components/TextInputSection';
import Sightings from './Components/Sightings';

// import views
import Splash from './views/Splash';
// import Home from './views/Home';
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
import BottomBar from './Components/BottomBar';

//import your store
// import store from './redux/store';
// import registerServiceWorker from './registerServiceWorker';



const store = createStore(appReducer, applyMiddleware(logger,thunk));

const App = () => {
  const [species, setSpecies] = useState([]);



  return (
    <Provider store={store}>
      <NativeRouter>
        <PaperProvider theme={theme}>

            <SafeAreaView style={styles.container}>
            
              <TopBar style={styles.header}/>
                
                  <ScrollView contentContainerStyle={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>

                        <Switch>

                          <Route exact path="/home" component={Splash} />
                          <Route path="/" component={Home} />

                        </Switch>

                  </ScrollView>

              <BottomBar style={styles.footer}/>

            </SafeAreaView>

        </PaperProvider>
      </NativeRouter>
    </Provider>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#0d4077',
  },
  header: {
    flex: .15,
    flexGrow: 1,
    elevation: 0,
  },
  scrollView: {
    flexDirection: 'column',
    flex: .7,
    alignSelf: 'stretch',
    backgroundColor: 'pink',
  },
  footer: {
    flex: .15,
  }
});

