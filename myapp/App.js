import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import Input from "./components/Input";

export default function App() {
  const name = 'fridaynight'
  const onTextAdd = function (nexText) {
    console.log(nexText)
  }

  return (
    <View style={styles.container}>
      <Header appName={name}></Header>
      <Input onAdd={onTextAdd} />
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
