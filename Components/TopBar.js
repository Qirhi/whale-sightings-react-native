import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';

const AppBar = () => (
  <Appbar.Header style = {styles.item}>
     <Appbar.Content title="Whale Sightings" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="arrow-left" onPress={() => {}} />

  </Appbar.Header>
);

export default AppBar;

const styles = StyleSheet.create ({
   item: {
      backgroundColor : "dodgerblue",
      width: '100%',
      shadowOpacity: 0,
      justifyContent: 'space-between',
   }
})