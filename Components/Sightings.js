import * as React from 'react';
import { connect } from "react-redux";

import SightingCard from './SightingCard';
import { StyleSheet, Text, View, Button, Image } from 'react-native';



const Sightings = (props) => {
  const { sightings } = props;
  // console.log("Cards: props ", props)
  // console.log("Cards: sightings ", sightings);
  if (!sightings) {
    return <Text> loading </Text>
  }

  return (
    <>
      <Text>Sightings</Text>
      <View style={styles.container}>
        <View style={styles.row}>
        {
          props.sightings.map(sighting => {
          return <SightingCard key={sighting.id} sighting={sighting} />
          })
        }
        </View>
      </View>
    </>
  )

};


// Redux step 3: connect components

const mapStateToProps = (state) => {
  return {
    sightings: state.sightings
  }
};

export default connect(mapStateToProps, null)(Sightings);


const styles = StyleSheet.create({
  container: {
  //   flex: 1,   
    backgroundColor: 'powderblue',    
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    
  },
  row: {
      alignContent: "space-around",
      flexDirection: "row",
      flexWrap: "wrap",
      maxWidth: "100%",
      alignItems: 'center',
      justifyContent: 'center',
    },
  // button: {
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     backgroundColor: 'dodgerblue',
  // //   color: '#52B2Bf',
  //     borderRadius: 4,
  //     color: 'red',
  //     width: "auto",
  //     minWidth: 50,
  //     maxWidth: 250,
  //     margin: 5,
  //     padding: 5,
  // },
  // selected: {
  //     backgroundColor: 'steelblue',
  //     borderWidth: 0,
  //   },

  // text: {
  //     fontSize: 16,
  //     lineHeight: 20,
  //     letterSpacing: 1,
  //     color: 'white',
  // },
  // selectedText: {
  //     color: 'blue',
  //   },
});