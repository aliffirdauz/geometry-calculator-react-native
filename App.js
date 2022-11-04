import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Stackk from './routes/Stackk';
import Tabb from './routes/Tabb';

function App() {
  return (
    <>
      <NavigationContainer independent={true}>
        {/* <Stackk /> */}
        <Tabb />
      </NavigationContainer>
    </>
  );
}

export default App;