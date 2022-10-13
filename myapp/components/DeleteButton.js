import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function DeleteButton({onButtonPressed}) {
  return (
    <Pressable onPress={onButtonPressed}>
      <View style={styles.button}>
        <Text>X</Text>
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