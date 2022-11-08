import { View, Text, StyleSheet, Dimensions, useWindowDimensions, Platform } from 'react-native'
import React from 'react'

//these two calues are not updated when the device is rotated
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header({ appName }) {

  // these two values are updated as the orientation changes
  const { width, height } = useWindowDimensions();
  const paddingVerticalDyn = height < 415 ? 5 : 10; //landscape: 0 padding

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { paddingVertical: paddingVerticalDyn }]}>Welcome to {appName}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 350,
    maxWidth: '90%',
  },
  title: {
    color: 'rebeccapurple',
    fontWeight: 'bold',
    borderStyle: 'dotted',
    borderColor: 'slateblue',
    borderWidth: Platform.select({ ios: 0, android: 4 }),
    fontSize: windowWidth < 380 ? 18 : 22,
    paddingHorizontal: windowWidth < 380 ? 10 : 20,
    paddingVertical: 10,
    borderRadius: 5,
    textAlign: 'center',
    
  },
});