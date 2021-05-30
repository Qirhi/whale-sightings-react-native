import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import theme from './CustomProperties/Themes';
import AppBarExample from './Components/Appbar';
import TextInputSection from './Components/TextInputSection';
import Card from './Components/IndivCard';
import Cards from './Components/Cards';
import axios from 'axios';



import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { appReducer } from './reducers/index';

//import reducer from our reducer file
// import reducer from './reducer';
//import your action creators used by dispatchers to alter your global state.
// import { fetchData, fetchDataFulfilled, fetchDataRejected } from './reducer';

import { Provider } from 'react-redux';
//import your store
// import store from './redux/store';
// import registerServiceWorker from './registerServiceWorker';


// axios.get(`http://hotline.whalemuseum.org/api.json?species=${selectedSpecies}`) // plug in state here in ${species}

const store = createStore(appReducer, applyMiddleware(logger,thunk));

const App = () => {
  const [species, setSpecies] = useState([]);


useEffect(() => {
      
  // begin API request
  axios.get(`http://hotline.whalemuseum.org/api.json?species=orca`) 

    .then(res => {
      // console.log("res: ", res);
      console.log("res.data.species: ", res.data)
      setSpecies([res.data.species])
  })
  .catch(err => {
      console.log("error: ", err)
      // dispatch({ type: FETCH_SPECIES_FAILURE, payload: err });
  })

  }, []);



  function onPressLearnMore (e)  {
    alert("hi")
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>

        <View style={styles.container}>
          <AppBarExample/>
          
          <Image
            style={styles.tinyLogo}
            source={require('./assets/beach.jpg')}
          />
          <Cards props={species}/>
          <Text>Welcome!</Text>

        </View>
        <View>

        </View>
        <View> 
        <Card/>
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
      </PaperProvider>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 430,
    height: 380,
  },
});

