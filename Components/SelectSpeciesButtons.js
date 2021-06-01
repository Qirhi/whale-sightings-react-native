import React, { useState } from 'react';

import { connect } from "react-redux";
import { selectSpecies, getSpecies } from '../actions/index';

import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";



// component data
const speciesList = [
    "orca", 
    "minke", 
    "gray whale", 
    "humpback", 
    "atlantic white-sided dolphin", 
    "pacific white-sided dolphin", 
    "dalls porpoise", 
    "harbor porpoise", 
    "harbor seal", 
    "northern elephant seal", 
    "southern elephant seal", 
    "california sea lion", 
    "steller sea lion", 
    "sea otter", 
    "other", 
    "unknown"
];

const SelectSpecies = (props) => {
    const [selectedButtonId, setSelectedButtonId] = useState("");


    const speciesButtonPressed = (species) => {
    // dispatch to the action creator... change species state
    console.log("handlePress fires: species", species)

    setSelectedButtonId(species) // species is a string, using it as an id of the button
    
    // dispatches
    props.selectSpecies(species);
    props.getSpecies(species);
  }





  return (
    <ImageBackground resizeMode= 'cover' source={require('../assets/dolphins.jpeg')} style={styles.backgroundContainer}>

    <View style={styles.container}>


      <View style={styles.row}>
     
        {
          speciesList.map(species => {

            return <Pressable 
                        title={`${species}`} 
                        style={[
                            styles.button,
                            selectedButtonId === species && styles.selected,
                        ]}
                        key={`${species}`} 
                        id={`${species}`} 
                        onPress={() => speciesButtonPressed(species)} 
                    >
                        <Text 
                              style={[
                                styles.text,
                                selectedButtonId === species && styles.selectedText,
                            ]}
                        >{`${species}`}</Text>
                    </Pressable>
          })
        } 
     
      </View>
        
    </View>
    </ImageBackground>
  )

};


const mapDispatchToProps = { getSpecies, selectSpecies };

export default connect(null, mapDispatchToProps)(SelectSpecies);

// style={styles.button}

const styles = StyleSheet.create({
  backgroundContainer: {
    // flex: 1,

    backgroundColor: 'red',
  },
    container: {
    //   flex: 1,   
      // backgroundColor: 'powderblue',    
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: "100%",
      },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#005596',
    //   color: '#52B2Bf',
        borderRadius: 4,
        color: 'red',
        width: "auto",
        minWidth: 50,
        maxWidth: 250,
        margin: 5,
        padding: 5,
    },
    selected: {
        backgroundColor: 'steelblue',
        borderWidth: 0,
      },

    text: {
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 1,
        color: 'white',
    },
    selectedText: {
        color: 'lightgrey',
      },
  });