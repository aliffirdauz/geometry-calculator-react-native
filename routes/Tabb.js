import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import CountGeo from './CountGeo';
import HomeScreen from '../screens/HomeScreen';
import Profile from './Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabb = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Calculator') {
            iconName = focused
              ? 'calculator'
              : 'calculator-outline';
          } else if (route.name === 'Geometry') {
            iconName = focused
              ? 'book'
              : 'book-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'person'
              : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Calculator" component={CountGeo} />
        <Tab.Screen name="Geometry" component={HomeScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  )
}

export default Tabb