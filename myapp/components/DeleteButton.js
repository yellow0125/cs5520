import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"

export default function DeleteButton({onButtonPressed}) {
  return (
    <Pressable onPress={onButtonPressed}>
      <View style={styles.button}>
        <Ionicons name='trash' size={24} color='black'/>
        {/* <Text>X</Text> */}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    fontSize: 18,
    justifyContent: 'center',
  },

});