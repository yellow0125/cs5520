import { View, Text } from "react-native";
import React from "react";
import { auth } from "../firebase/firebase-setup";
import LocationManager from "./LocationManager";
export default function () {
  return (
    <View>
      <Text>{auth.currentUser.email}</Text>
      <Text>{auth.currentUser.uid}</Text>
      <LocationManager/>
    </View>
  );
}