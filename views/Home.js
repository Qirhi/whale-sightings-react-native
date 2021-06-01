import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';

// import components
import AppBar from '../Components/Appbar';
import SelectSpeciesImage from '../Components/SelectSpeciesImage';
import SelectSpeciesButtons from '../Components/SelectSpeciesButtons';




const Home = () => {

  const image = { uri: "https://cdn.pixabay.com/photo/2015/11/02/18/32/water-1018808_1280.jpg" };

  return (
      <SafeAreaView>
        <AppBar/>

        <ImageBackground resizeMode= 'cover' source={require('../assets/humpback.jpeg')} style={styles.backgroundContainer}>
        <Text style={styles.text}>Welcome</Text>
        </ImageBackground>

        <SelectSpeciesImage/>

        <SelectSpeciesButtons/>

      </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      resizeMode: "center",
      backgroundColor: 'red',
    },
    text: {
      fontSize: 40,
      color: 'white',
      alignSelf: 'center',
      paddingTop: 150,
      paddingBottom: 150,
      fontWeight: 'bold',
    }
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center'
  // },
  // backgroundImage:{
  //     flex : 1,
  //     width : '100%'
  // },
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