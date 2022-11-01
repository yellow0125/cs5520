import { View, Text, StyleSheet, Dimensions, useWindowDimensions, Platform } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header({ appName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {appName}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 350,
    maxWidth: '90%'
  },
  title: {
    color: 'rebeccapurple',
    fontWeight: 'bold',
    borderStyle: 'dotted',
    borderColor: 'slateblue',
    borderWidth: Platform.select({ ios: 0, android: 8 }),
    fontSize: windowWidth < 380 ? 18 : 22,
    paddingHorizontal: windowWidth < 380 ? 10 : 20,
    paddingVertical: 10,
    borderRadius: 5,
    textAlign: 'center'
  },
});