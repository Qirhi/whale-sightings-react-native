import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useHistory } from 'react-router';

const BottomBar = () => {

   const history = useHistory();

   const homePressed = () => {
      // console.log("homePressed fires");
      history.push("/home")
   };

   const binosPressed = () => {
      // console.log("binosPressed fires");
      history.push("/home")
   };

   const earthPressed = () => {
      // console.log("earthPressed fires");
      history.push("/home")
   };

   return (
      <Appbar.Header style = {styles.item}>
            <Appbar.Action icon="home" onPress={homePressed} />
            <Appbar.Action icon="binoculars" onPress={binosPressed} />
            <Appbar.Action icon="earth" onPress={earthPressed} />
      </Appbar.Header>
   );
   };

export default BottomBar;

const styles = StyleSheet.create ({
   item: {
      backgroundColor : "dodgerblue",
      width: '100%',
      shadowOpacity: 0,
      justifyContent: 'space-around',
      elevation: 0,
   }
})