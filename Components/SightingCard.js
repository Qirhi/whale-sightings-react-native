import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons';


const SightingCard = (props) => {
  const { sighting } = props;
  // console.log("SightingCard: props ", props)
  // console.log("SightingCard: sighting.species", sighting.species)




  // Formats date from props string of seconds, epoch
  let parsedDate = Date.parse(sighting.sighted_at); // number of seconds
  var dateOfSighting = Date(1000 * parsedDate);

    if (!sighting) {
      return <Text> loading </Text>
    }

return (
  <Card style={styles.card}>
    
    <Card.Title 
      title={`${sighting.species} Sighting`.toUpperCase()}
      subtitle={`${dateOfSighting}`}
    />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

    <Card.Content>
      <Title>{`${sighting.location}`}</Title>
      <Paragraph>{`${sighting.description}`}</Paragraph>
    </Card.Content>

    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  );
};

export default SightingCard;

/*
sightings: [
    {
      id:"5a049b7e686f743ec5040000",
      species:"orca",
      quantity:"5",
      description:"This is a test",url:"http://hotline.whalemuseum.org/sightings/5a049b7e686f743ec5040000",latitude:47.79953,
      longitude:-122.47996699999999,
      location:"",
      sighted_at:"2017-11-09T18:11:00Z",
      created_at:"2017-11-09T18:16:30Z",
      updated_at:"2017-11-14T22:20:45Z",
      orca_type:"unknown"
    },

*/

const styles = StyleSheet.create({
  card: {
    color: 'blue',
    maxWidth: 300,
    minWidth: '50%',
    margin: 5,
    marginTop: 25,
    marginBottom: 25,
  },
  container: {
  //   flex: 1,   
    backgroundColor: 'powderblue',    
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  // row: {
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //     maxWidth: "100%",
  //   },
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