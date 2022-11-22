import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import ImageManager from './ImageManager'

export default function Input({ onAdd, modal, onCancel }) {
  const [text, setText] = useState('')
  const [uri, setUri] = useState("");
  const imageHandler = (uri) => {
    console.log("imageHandler called", uri);
    setUri(uri);
  };
  return (
    <Modal visible={modal}>
      <View style={styles.container}>
        <Image source={require('../assets/img/target.png')}

          style={styles.image} />
        {/* <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png' }}

          style={{ width: 100, height: 100 }} /> */}
        <TextInput
          style={styles.input}
          onChangeText={(newText) => { setText(newText) }}
          value={text}
          placeholder="type something"
        />
        <ImageManager imageHandler={imageHandler} />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title='Confirm'
              onPress={() => {
                onAdd({text, uri})
                setText("")
              }}
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
    color: "#ff00ff",
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    margin: 5,
  },
  buttons: {
    flexDirection: 'row'
  },
  button: {
    margin: 5,
    width: '30%',
  },
  image: {
    width: 100,
    height: 100,
  },
});