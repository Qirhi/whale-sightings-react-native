import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';

// import components
import TopBar from '../Components/TopBar';
import BottomBar from '../Components/BottomBar';

import SelectSpeciesImage from '../Components/SelectSpeciesTitleBar';
import SelectSpeciesButtons from '../Components/SelectSpeciesButtons';
import SelectSpeciesTitleBar from '../Components/SelectSpeciesTitleBar';




const Home = () => {

  const image = { uri: "https://cdn.pixabay.com/photo/2015/11/02/18/32/water-1018808_1280.jpg" };

  // NOTE:  I colored the background dodgerblue to cover up the fact that i couldn't get the components to extend all the way to fill the height of the screen
  return (
        <ScrollView style={styles.scrollView}>

          <View style={styles.topView}>
          <ImageBackground resizeMode= 'cover' source={require('../assets/humpback.jpeg')} style={styles.backgroundContainer}>
            <Text style={styles.text}>Welcome</Text>
          </ImageBackground>
          </View>

          <View style={styles.bottomView}>
            <SelectSpeciesTitleBar/>
            <SelectSpeciesButtons/>
          </View>

        </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'dodgerblue',
    flexDirection: 'column',
    alignSelf: 'stretch',
    height: null,
    flex: 1,
  },
  topView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  bottomView: {
    flex: 1, 
    alignSelf: 'stretch',
  },
  backgroundContainer: {
    backgroundColor: 'slateblue',
  },
  text: {
    fontSize: 40,
    color: 'white',
    alignSelf: 'center',
    paddingTop: 100,
    paddingBottom: 120,
    fontWeight: 'bold',
  },
  });