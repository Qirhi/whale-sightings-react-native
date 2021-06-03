import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';

// import components
import TopBar from '../Components/TopBar';
import BottomBar from '../Components/BottomBar';

import SelectSpeciesImage from '../Components/SelectSpeciesImage';
import SelectSpeciesButtons from '../Components/SelectSpeciesButtons';




const Home = () => {

  const image = { uri: "https://cdn.pixabay.com/photo/2015/11/02/18/32/water-1018808_1280.jpg" };

  return (
      <SafeAreaView style={{flex:1}}>
        <ScrollView style={styles.scrollView}>
        <TopBar/>

        <ImageBackground resizeMode= 'cover' source={require('../assets/humpback.jpeg')} style={styles.backgroundContainer}>
        <Text style={styles.text}>Welcome</Text>
        </ImageBackground>

        <SelectSpeciesImage/>

        <SelectSpeciesButtons/>
        </ScrollView>
        <View  style={styles.footer}>
                  <BottomBar/>
                  </View>

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
      paddingTop: 200,
      paddingBottom: 150,
      fontWeight: 'bold',
    },

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
      backgroundColor: 'dodgerblue',
      flexDirection: 'column',
      flexGrow: 1,
      alignSelf: 'stretch',
      height: null,
      flex: .8,
    },
    footer: {
      alignSelf: 'stretch',
      height: null,
      flex: .2,
    }
  });