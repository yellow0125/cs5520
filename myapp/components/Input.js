import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'


export default function Input({ onAdd, modal, onCancel }) {
  const [text, setText] = useState('')

  return (
    <Modal visible={modal}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => { setText(newText) }}
          value={text}
          placeholder="enter some words"
        />
        <Button
          title='Confirm'
          onPress={() => {
            onAdd(text);
            setText("")
          }}>
        </Button>
        <Button
        title='Cancel'
        onPress={onCancel}>

        </Button>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});