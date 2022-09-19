import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const name = 'fridaynight'
  const [text, onChangeText] = React.useState();

  return (
    <View style={styles.container}>
      <Header appName={name}></Header>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="enter some words"
      />
      <Text>{text}</Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
