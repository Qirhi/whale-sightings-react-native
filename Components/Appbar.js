import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';

const AppBar = () => (
  <Appbar.Header style = {styles.item}>
     <Appbar.Content title="Whale Sightings" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
);

export default AppBar;

const styles = StyleSheet.create ({
   item: {
      backgroundColor : "dodgerblue",
      width: '100%',
   }
})