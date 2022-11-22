import { View, Text, Button,FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { storage } from "../firebase/firebase-setup";
import { getDownloadURL, ref } from "firebase/storage";

export default function GoalDetails({ route }) {
  const [users, setUsers] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const goal = route.params.goalObj;

  useEffect(() => {
    const getImageURL = async () => {
      try {
        if (goal.uri) {
          const reference = ref(storage, goal.uri);
          const downloadImageURL = await getDownloadURL(reference);
          setImageURL(downloadImageURL);
        }
      } catch (err) {
        console.log("download image ", err);
      }
    };
    getImageURL();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('the fetch request failed')
        }
        const data = await response.json();
        setUsers(data);
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchUsers()

  }, [])

  const addUser = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(
          { name: 'Neda' }
        )
      });
      if (!response.ok) {
        throw new Error("post fetch faile")
      }
      const data = await response.json();
      // console.log(data);
      setUsers(prevUsers => [...prevUsers, data])
    } catch (err) { console.log(err) }
  };





  return (
    <View>
      <Text>You are viewing details of {route.params.goalObj.text}</Text>
      {imageURL && (
        <Image source={{ uri: imageURL }} style={{ width: 100, height: 100 }} />
      )}
      <Button title="Add User" onPress={addUser} />
      <FlatList data={users} renderItem={({ item }) => {
        return <Text>{item.name}</Text>

      }} />
    </View>
  )
}
