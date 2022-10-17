import React from 'react'
import Home from './components/Home'
import GoalDetails from './components/GoalDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'grey' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'All My Goals',
          }} />
        <Stack.Screen
          name='GoalDetails'
          component={GoalDetails}
          options={({ route, navigation }) => {return { title: route.params.goalObj.text }}}
         />
      </Stack.Navigator>
    </NavigationContainer>

  )
}