import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CalculateScreen from '../screens/CalculateScreen';
import CircleScreen from '../screens/Geometry/CircleScreen'
import SquareScreen from '../screens/Geometry/SquareScreen'
import RectangleScreen from '../screens/Geometry/RectangleScreen'
import TriangleScreen from '../screens/Geometry/TriangleScreen'
import ParallelogramScreen from '../screens/Geometry/ParallelogramScreen'
import TrapezoidScreen from '../screens/Geometry/TrapezoidScreen'
import RhombusScreen from '../screens/Geometry/RhombusScreen'
import PentagonScreen from '../screens/Geometry/PentagonScreen'

const Stack = createNativeStackNavigator()

const StackCountGeo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Calculator" component={CalculateScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Circle" component={CircleScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Square" component={SquareScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Rectangle" component={RectangleScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Triangle" component={TriangleScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Parallelogram" component={ParallelogramScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Trapezoid" component={TrapezoidScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Rhombus" component={RhombusScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Pentagon" component={PentagonScreen} />
    </Stack.Navigator>
  )
}

export default StackCountGeo