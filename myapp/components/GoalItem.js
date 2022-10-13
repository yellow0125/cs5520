import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import DeleteButton from "./DeleteButton";

export default function GoalItem({ goal, onDelete, onItemPress }) {
  function deletePressed() {
    onDelete(goal.key)
  }

  return (

    <Pressable
      onPress={onItemPress}
      android_ripple={{ color: '#223355', foreground: true }}
      style={(obj) => {
        return obj.pressed && styles.pressedItem
      }}
    // style={({ pressed }) => {
    //   return pressed && styles.pressedItem;
    // }}
    >
      <View style={styles.goalTextContainer}>
        <Text style={styles.goalText}> {goal.text} </Text>
        <View style={styles.button}>
          {/* <Button
            title="X"
            onPress={() => onDelete(goal.key)}
            color="#444"
          /> */}
          <DeleteButton onButtonPressed={deletePressed} />
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalTextContainer: {
    margin: 8,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#aaa",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  goalText: {
    fontSize: 18,
    color: "#929",
    padding: 8,
  },
  button: {
    margin: 5,
    width: '30%',
  },
  pressedItem: {
    backgroundColor: 'r',
    opacity: 0.5,

  }
});