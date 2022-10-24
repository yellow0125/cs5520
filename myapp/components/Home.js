import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Header from './Header';
import Input from "./Input";
import GoalItem from './GoalItem';

export default function Home({navigation}) {
  const name = 'fridaynight'
  const [goals, setGoals] = useState([])

  const onTextAdd = function (newText) {
    const newGoal = { text: newText, key: Math.random() }
    setGoals((prevgoals) => {
      return [...prevgoals, newGoal]

    })
    setModalVisible(false)
  }

  const [modalVisible, setModalVisible] = useState(false)
  const makeModalVisible = () => { setModalVisible(true) }
  const makeModalInvisible = () => { setModalVisible(false) }

  function onDelete(deletedKey) {
    console.log('delete pressed ', deletedKey)
    setGoals(goals.filter((goal) => { return goal.key != deletedKey }))
  }
  function itemPressed(goal) {
    console.log("Item pressed")
    navigation.navigate('GoalDetails', {goalObj:goal})

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header appName={name}></Header>
        <Button title='Add a Goal' onPress={makeModalVisible}></Button>
      </View>

      <View style={styles.bottomContainer}>
        <FlatList data={goals}
          renderItem={({ item }) => {
            // console.log(item)
            return (
              <GoalItem goal={item} onDelete={onDelete} onItemPress={itemPressed} />
            )
          }}
          contentContainerStyle={styles.scrollViewItems}>
        </FlatList>
      </View>
      <Input
        modal={modalVisible}
        onAdd={onTextAdd}
        onCancel={makeModalInvisible} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: 'pink',
  },
  scrollViewItems: {
    alignItems: "center",
  },
  textContainer: {
    borderRadius: 5,
    backgroundColor: 'grey',
    borderWidth: 1,
    padding: 5,
    margin: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: 'bold',
  },
});
