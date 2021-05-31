import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import theme from './CustomProperties/Themes';
import AppBar from './Components/Appbar';
import TextInputSection from './Components/TextInputSection';
import Sightings from './Components/Sightings';
import SelectSpeciesImage from './Components/SelectSpeciesImage';

import SelectSpeciesButtons from './Components/SelectSpeciesButtons';
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


// useEffect(() => {
      
//   // begin API request
//   axios.get(`http://hotline.whalemuseum.org/api.json?species=orca`) 

//     .then(res => {
//       // console.log("res: ", res);
//       console.log("res.data.species: ", res.data)
//       setSpecies([res.data.species])
//   })
//   .catch(err => {
//       console.log("error: ", err)
//       // dispatch({ type: FETCH_SPECIES_FAILURE, payload: err });
//   })

//   }, []);



  function onPressLearnMore (e)  {
    alert("hi")
  }


  const image = { uri: "https://cdn.pixabay.com/photo/2019/06/20/09/26/underwater-4286600_1280.jpg" };

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <ScrollView style={styles.scrollView}>
          <SafeAreaView>
            <ImageBackground resizeMode= 'cover' source={image} style={styles.backgroundContainer}>
                <AppBar/>
                {/* <ActivityIndicatorWheel/> */}

                <View style={styles.container}>
                
                  
                  <Image
                    style={styles.tinyLogo}
                    source={require('./assets/humpback.jpeg')}
                  />

                </View>

                <View styles={styles.container}>
                  <SelectSpeciesImage/>
                  <SelectSpeciesButtons/>
                <Sightings/>
                </View>
        
                <View>
                  <TextInputSection/>
                  <Button
                    title="Submit"
                    color="teal"
                    onPress={onPressLearnMore}
                  />
                  {/* <AppBarExample/> */}
                  <StatusBar style="auto" />
                </View>
            </ImageBackground>
          </SafeAreaView>
        </ScrollView>
      </PaperProvider>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: '100%',
    resizeMode: "center",
    position: 'fixed', // not sure if this works
  },
  container: {
    flex: 1,
    backgroundColor: '#ffC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    // backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
  tinyLogo: {
    width: 430,
    height: 380,

  },
});

