import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import BioScreen from '../screens/BioScreen'
import ShowScreen from '../screens/ShowScreen'

const Stack = createNativeStackNavigator()

const StackkBio = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Bio" component={BioScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Show" component={ShowScreen} />
    </Stack.Navigator>
  )
}

export default StackkBio