import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-native';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';


const Splash = () => {
  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

  // delayed animation making text appear
  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setAlign('flex-start'), setAlignsecond(true);
    }, 3000);
    return () => clearTimeout(myTimeout);
  }, []);

  const history = useHistory();
  // when image is pressed, route to /home
  const touchableOpacityPressed = () => {
    history.push("/home");
  }

  return (
    <View style={styles.container}>
    
        <ImageBackground
          source={require('../assets/whales.jpeg')}
          style={styles.backgroundImage}>

          {!alignsecond ? null : (
          <View style={styles.column}>
            <TouchableOpacity onPress={() => history.push("/home")}>
              <Text style={styles.textStyle}>
                  Whale 🐋          
              </Text>
              <Text style={styles.textStyleSecondary}>
              Sightings
              </Text>
            </TouchableOpacity>
          </View>
          )}
  
        </ImageBackground>

    </View> 
  );
};

export default Splash;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#2F7ECC',
  },
  column: {
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: 53,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyleSecondary: {
    fontSize: 50,
    color: 'dodgerblue',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
    textDecorationColor: '#81c4f4',
    lineHeight: 60,
    marginBottom: 300,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
