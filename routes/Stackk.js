import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import Dashboard from './Dashboard'

const Stack = createNativeStackNavigator()

const Stackk = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  )
}

export default Stackk