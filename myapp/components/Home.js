import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
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
import { writeToDB, deleteFromDB } from '../firebase/firestore';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { firestore, auth, storage } from '../firebase/firebase-setup';
import { ref, uploadBytes } from "firebase/storage";
export default function Home({ navigation }) {
  const name = 'fridaynight'
  const [goals, setGoals] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(firestore, "goals"),
        where("user", "==", auth.currentUser.uid)
      ),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setGoals([]);
          return;
        }
        setGoals(
          querySnapshot.docs.map((snapDoc) => {
            let data = snapDoc.data();
            data = { ...data, key: snapDoc.id };
            return data;
          })
        );
      },
      (err) => {
        console.log(err);
      }
    )
    return () => {
      unsubscribe();
    };
  }, [])

  const [modalVisible, setModalVisible] = useState(false)

  const getImage = async (uri) => {
    try {
      const response = await fetch(uri);
      if(!response.ok){
        throw new Error('image fetch request failed')
      }
      const blob = await response.blob();
      return blob;
    } catch (err) {
      console.log("fetch image ", err);
    }
  };

  const onTextAdd = async function (newObj) {
    const uri = newObj.uri;
    try {
      if (uri) {
        const imageBlob = await getImage(uri);
        const imageName = uri.substring(uri.lastIndexOf("/") + 1);
        const imageRef = await ref(storage, `images/${imageName}`);
        const uploadResult = await uploadBytes(imageRef, imageBlob);
        newObj.uri = uploadResult.metadata.fullPath; //replaced the uri with reference to the storage location
      }
      await writeToDB(newObj);
    } catch (err) {
      console.log("image upload ", err);
    }
    setModalVisible(false);
  };

  
  const makeModalVisible = () => { setModalVisible(true) }
  const makeModalInvisible = () => { setModalVisible(false) }

  async function onDelete(deletedKey) {
    // console.log('delete pressed ', deletedKey)
    // setGoals(goals.filter((goal) => { return goal.key != deletedKey }))
    await deleteFromDB(deletedKey);
  }
  function itemPressed(goal) {
    console.log("Item pressed")
    navigation.navigate('GoalDetails', { goalObj: goal })

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
    color: "blue",
    padding: 30,
    margin: 30,
  },
  text: {
    fontSize: 12,
  },
});
