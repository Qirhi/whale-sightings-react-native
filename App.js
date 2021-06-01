// Example of Animation Splash Screen with Zoom Effect
// https://aboutreact.com/animation-splash-screen-with-zoom-effect/

// Import React
import React, {useEffect} from 'react';
// Import required components
import {View, Text, StyleSheet, Image, Animated, ImageBackground} from 'react-native';

const App = () => {
  const width = new Animated.Value(360);
  const height = new Animated.Value(600);
  const SITE_BANNER_VERTICAL_IMAGE =
    'https://cdn.pixabay.com/photo/2015/11/02/18/32/water-1018808_1280.jpg';
  const SAMPLE_APP_LOGO =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png';

  // useEffect(() => {
  //   Animated.timing(
  //     width, // The animated value to drive
  //     {
  //       toValue: 360, // Animate to opacity: 1 (opaque)
  //       duration: 450, // Make it take a while
  //       useNativeDriver: false,
  //     },
  //   ).start(); // Starts the animation
  //   Animated.timing(
  //     height, // The animated value to drive
  //     {
  //       toValue: 750, // Animate to opacity: 1 (opaque)
  //       duration: 10000, // Make it take a while
  //       useNativeDriver: false,
  //     },
  //   ).start(); // Starts the animation
  // }, []);

  return (

    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/whales.jpeg')}
        style={styles.backgroundImage}>
        <Text style={styles.textStyle}>
            Whale           
        </Text>
        <Text style={styles.textStyleSecondary}>
                       Sightings
        </Text>
      </ImageBackground>
    </View> 
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#2F7ECC',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 48,
    backgroundColor: 'rgba(11, 56, 82, 0.3)',
  },
  logo: {
    width: 100,
    height: 100,
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  textStyleSecondary: {
    fontSize: 25,
    color: 'dodgerblue',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: "cover",
    resizeMode: "contain",
    justifyContent: "center"
  }
});


/*

    <View style={styles.container}>
      <Animated.Image
        source={{uri: SITE_BANNER_VERTICAL_IMAGE}}
        style={{
          width: width,
          height: height,
          position: 'absolute',
        }}
      />
    </View>

      <View style={styles.logoContainer}>
        <Image source={{uri: SAMPLE_APP_LOGO}} style={styles.logo} />
        <Text style={styles.textStyle}>
          Example of Animation Splash Screen with Zoom Effect
        </Text>
      </View>

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
import ActivityIndicatorWheel from './Components/ActivityIndicatorWheel';

import axios from 'axios';

 

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { appReducer } from './reducers/index';

import { NativeRouter, Route, Link } from "react-router-native";


//import reducer from our reducer file
// import reducer from './reducer';
//import your action creators used by dispatchers to alter your global state.
// import { fetchData, fetchDataFulfilled, fetchDataRejected } from './reducer';

import { Provider } from 'react-redux';
import { SelectSpecies } from './actions';
//import your store
// import store from './redux/store';
// import registerServiceWorker from './registerServiceWorker';


// axios.get(`http://hotline.whalemuseum.org/api.json?species=${selectedSpecies}`) // plug in state here in ${species}

const store = createStore(appReducer, applyMiddleware(logger,thunk));

const App = () => {
  const [species, setSpecies] = useState([]);



  function onPressLearnMore (e)  {
    alert("hi")
  }


  const image = { uri: "https://cdn.pixabay.com/photo/2015/11/02/18/32/water-1018808_1280.jpg" };

  return (
    <Provider store={store}>
        <SafeAreaView>  
         <ImageBackground
            source={require('./assets/beach.jpg')}
            style={styles.backgroundImage}>
            <Text>
               Some text here ...
            </Text>
        </ImageBackground>
      </SafeAreaView>
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
backgroundImage:{
    flex : 1,
    width : '100%'
},
  // scrollView: {
  //   backgroundColor: 'pink',
  //   flexDirection: 'column',
  //   // marginHorizontal: 20,
  // },
  // tinyLogo: {
  //   width: 430,
  //   height: 380,

  // },
});

*/