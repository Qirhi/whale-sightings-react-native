import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Animated, ImageBackground} from 'react-native';

const Splash = () => {
  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      setAlign('flex-start'), setAlignsecond(true);
    }, 3000);
    return () => clearTimeout(myTimeout);
  }, []);


  return (


    <View style={styles.container}>

      <ImageBackground
        source={require('../assets/whales.jpeg')}
        style={styles.backgroundImage}>
          <>
    {!alignsecond ? null : (
<>
        <Text style={styles.textStyle}>
            Whale{'         '}           
        </Text>
        <Text style={styles.textStyleSecondary}>
        {'   '}Sightings
        </Text>
        </>
    )}
    </>
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
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 48,
    backgroundColor: 'rgba(11, 56, 82, 0.3)',
  },
  logo: {
    width: 100,
    height: 100,
  },
  textStyle: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold,',
  },
  textStyleSecondary: {
    fontSize: 50,
    color: 'dodgerblue',
    textAlign: 'center',
    fontWeight: 'bold,',
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
    textDecorationColor: 'white',
    lineHeight: 40,
    marginBottom: 300,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
