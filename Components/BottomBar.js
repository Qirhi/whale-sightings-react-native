import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';

const BottomBar = () => (
  <Appbar.Header style = {styles.item}>
     <Appbar.Content title="Bottom Bar" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
);

export default BottomBar;

const styles = StyleSheet.create ({
   item: {
      backgroundColor : "dodgerblue",
      width: '100%',
      shadowOpacity: 0,
   }
})