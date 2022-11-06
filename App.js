import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import CalculateScreen from './screens/CalculateScreen';

import Stackk from './routes/Stackk';
import Tabb from './routes/Tabb';
import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import BioScreen from './screens/BioScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CircleScreen from './screens/Geometry/CircleScreen';
import SquareScreen from './screens/Geometry/SquareScreen';
import RectangleScreen from './screens/Geometry/RectangleScreen';
import TriangleScreen from './screens/Geometry/TriangleScreen';
import ParallelogramScreen from './screens/Geometry/ParallelogramScreen';
import TrapezoidScreen from './screens/Geometry/TrapezoidScreen';
import PentagonScreen from './screens/Geometry/PentagonScreen';
import RhombusScreen from './screens/Geometry/RhombusScreen';

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer independent={true}>
        {/* <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Calculator" component={CalculateScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Circle" component={CircleScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Square" component={SquareScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Rectangle" component={RectangleScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Triangle" component={TriangleScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Parallelogram" component={ParallelogramScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Trapezoid" component={TrapezoidScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Rhombus" component={RhombusScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Pentagon" component={PentagonScreen} />
        </Stack.Navigator> */}
        <Stackk />
        {/* <Tabb /> */}
        {/* <LoginScreen /> */}
        {/* <CalculateScreen /> */}
        {/* <HomeScreen /> */}
        {/* <BioScreen /> */}
        {/* <CircleScreen/> */}
      </NavigationContainer>
    </>
  );
}

export default App;