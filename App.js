import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/index';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
