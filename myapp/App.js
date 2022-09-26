import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Header from './components/Header';
import Input from "./components/Input";

export default function App() {
  const name = 'fridaynight'
  const [modalVisible, setModalVisible] = useState(false)
  const onTextAdd = function (nexText) {
    console.log(nexText)
    setModalVisible(false)
  }
  const makeModalVisible = () => { setModalVisible(true) }
  const makeModalInvisible = () => { setModalVisible(false) }

  return (
    <View style={styles.container}>
      <Header appName={name}></Header>
      <Button title='Add a Goal' onPress={makeModalVisible}></Button>
      <Input modal={modalVisible} onAdd={onTextAdd} onCancel={makeModalInvisible}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
