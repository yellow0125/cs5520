import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';

export default function Input({onAdd}) {
  const [text, setText] = useState('')

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(newText)=>{setText(newText)}}
        value={text}
        placeholder="enter some words"
      />
      <Button 
        title='Confirm' 
        onPress={() => 
          {onAdd(text);
        setText("")}}>
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});