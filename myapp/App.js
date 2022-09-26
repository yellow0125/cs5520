import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header appName={name}></Header>
        <Button title='Add a Goal' onPress={makeModalVisible}></Button>
      </View>
      <View style={styles.bottomContainer}>
        <Text>You typed...</Text>
      </View>
      <Input modal={modalVisible} onAdd={onTextAdd} onCancel={makeModalInvisible} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  text: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: 'bold',
    color: 'lightblue',

  },
});
