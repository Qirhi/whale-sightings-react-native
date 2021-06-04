import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import theme from './CustomProperties/Themes';
import { NativeRouter, BackButton, Route, Switch } from "react-router-native";
import { useHistory, useLocation } from 'react-router';
import axios from 'axios';

// import components
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';

// import views
import Splash from './views/Splash';
import Home from './views/Home';
import Search from './views/Search';

// import redux files
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { appReducer } from './reducers/index';



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

  // let location = useLocation();


  history = useHistory();
  location = useLocation();

  console.log("location",location)
console.log("history",history)

  return (
    <Provider store={store}>
      {/* <NativeRouter> */}
        <BackButton>
          <PaperProvider theme={theme}>

              <SafeAreaView style={styles.container}>
            
                {
                  // if ()

                }

                <TopBar style={styles.header}/>
                  
                    <ScrollView contentContainerStyle={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>

                          <Switch>

                            <Route exact path="/" component={Splash} />
                            <Route path="/home" component={Home} />

                          </Switch>

                    </ScrollView>

                <BottomBar style={styles.footer}/>



              </SafeAreaView>

          </PaperProvider>
        </BackButton>
      {/* </NativeRouter> */}
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

