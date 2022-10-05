import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function GoalItem({ goal, onDelete }) {

  return (
    <View style={styles.goalTextContainer}>
      <Text style={styles.goalText}> {goal.text} </Text>
      <View style={styles.button}>
        <Button
          title="X"
          onPress={() => onDelete(goal.key)}
          color="#444"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  goalTextContainer: {
    margin: 8,
    borderRadius: 5,
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
});