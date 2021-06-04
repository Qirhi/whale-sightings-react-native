import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useHistory } from 'react-router';
import { Link } from 'react-router-native';
// import { BackHandler } from 'react-native';


const TopBar = () => {

   const history = useHistory();

   // function handleBackButtonClick() {
   //    navigation.goBack();
   //    return true;
   // }

//   useEffect(() => {
//     BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
//     return () => {
//       BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
//     };
//   }, []);

   const arrowLeftPressed = () => {
      // console.log("arrowLeftPressed fires");

      history.goBack();
   };

   const titlePressed = () => {
      // console.log("titlePressed fires");
      history.push("/home");
   };

   const magnifyPressed = () => {
      // console.log("magnifyPressed fires");
      history.push("/home");
   };


   return (
         <Appbar.Header style = {styles.item}>

            <Appbar.Action icon="arrow-left" onPress={arrowLeftPressed} />

            <Appbar.Content title="Whale Sightings" onPress={titlePressed}  />

            <Appbar.Action icon="magnify" onPress={magnifyPressed} />
         </Appbar.Header>
   );
};

export default TopBar;

const styles = StyleSheet.create ({
   item: {
      backgroundColor : "dodgerblue",
      justifyContent: 'space-between',
      width: '100%',
      shadowOpacity: 0,
      elevation: 0,
   },
})