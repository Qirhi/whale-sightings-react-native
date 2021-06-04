import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

// import components
import SelectSpeciesTitleBar from '../Components/SelectSpeciesTitleBar';
import SelectSpeciesButtons from '../Components/SelectSpeciesButtons';



const Home = () => {


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
    backgroundColor: 'dodgerblue',   // NOTE:  I colored the background dodgerblue to cover up the fact that i couldn't get the components to extend all the way to fill the height of the screen
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
    paddingTop: 150,
    paddingBottom: 150,
    fontWeight: 'bold',
  },
});