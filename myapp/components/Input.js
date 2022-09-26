import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import React, { useState } from 'react'

export default function Input({ onAdd, modal, onCancel }) {
  const [text, setText] = useState('')

  return (
    <Modal visible={modal}>
      <View style={styles.container}>
        {/* <Image source={require('../assets/img/target.png')}
        
          style={{ width: 100, height: 100 }} /> */}
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png' }}

          style={{ width: 100, height: 100 }} />
        <TextInput
          style={styles.input}
          onChangeText={(newText) => { setText(newText) }}
          value={text}
          placeholder="enter some words"
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={() => {
                onAdd(text);
                setText("")
              }} />
          </View>
          <View style={styles.button}>
            <Button
              title='Confirm'
              onPress={onCancel}
              disabled={text.length ? false : true} />
          </View>
        </View>
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
    borderBottomWidth: 2,
    padding: 10,
  },
  buttons: {
    margin: 10,
    flexDirection: 'row'
  },
  button: {
    width: '30%',
  }
});