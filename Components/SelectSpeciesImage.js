import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://cdn.pixabay.com/photo/2017/02/09/15/10/sea-2052650_1280.jpg" };

const SelectSpeciesImage = () => (
  <View style={styles.container}>
    {/* <ImageBackground source={image} style={styles.image}> */}
      <Text style={styles.text}>Select Species</Text>
    {/* </ImageBackground> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: 60
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'dodgerblue',
  }
});

export default SelectSpeciesImage;