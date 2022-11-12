import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
import { Button } from "react-native";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase-setup";
import Profile from "./components/Profile";
import React, { useState, useEffect } from "react";

const Stack = createNativeStackNavigator()
function rightButtonPressed(){
  console.log('urgent')
}


function rightButton(){
  return (
  <Button 
  title='urgent' 
  onPress={rightButtonPressed}
        
/>)}
  
export default function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserAuthenticated(true);
      } else {
        setIsUserAuthenticated(false);
      }
    });
  });

  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#995099" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    );
  };

  const AppStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#995099" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => {
            return {
              title: "All Goals",
              headerRight: () => {
                return (
                  <Button
                    title="Profile"
                    onPress={() => navigation.navigate("Profile")}
                  />
                );
              },
            };
          }}
        />
        <Stack.Screen
          name="GoalDetails"
          component={GoalDetails}
          options={({ route, navigation }) => {
            return {
              title: route.params.goalObj.text,
              headerRight: rightButton,
            };
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => {
            return {
              headerRight: () => {
                return <Button title="Logout" onPress={() => signOut(auth)} />;
              },
            };
          }}
        />
      </Stack.Navigator>
    );
  };
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  
  return (
    <NavigationContainer>
      {isUserAuthenticated ? AppStack() : AuthStack()}
    </NavigationContainer>

  )
}