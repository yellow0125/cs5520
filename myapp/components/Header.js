import { View, Text } from 'react-native'
import React from 'react'

export default function Header(props){
  return(
    <View>
      <Text>Open up App.js to start working on your app {props.appName}!</Text>
    </View>

  )

}
