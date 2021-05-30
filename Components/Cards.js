import * as React from 'react';
import IndivCard from './IndivCard';
import { StyleSheet, Text, View, Button, Image } from 'react-native';



const Cards = (props) => {
  const { sightings } = props;
  console.log("props: ", props)
  console.log("SIGHTINGS: ", sightings);
  if (!sightings) {
    return <div> loading </div>
  }

  return (
    <>
      <Text>Sightings</Text>
      <View>
        {
          props.sightings.map(sighting => {
          return <IndivCard key={sighting.id} sighting={sighting} />
          })
        }
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


export default Cards;
