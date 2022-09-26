import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header(props){
  return(
    <View>
      <Text style={styles.title}>Open up App.js to start working on your app {props.appName}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    alignSelf: "center",
    justifyContent: 'center',
    fontSize:13,
    fontWeight:'bold',
    color:'purple',
    borderRadius: 10,
    borderWidth: 1,
    borderColor:'purple',
    padding:5,
  },
});