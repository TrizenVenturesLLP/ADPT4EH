import React from 'react';
import { Platform } from 'react-native';
import { NavigationProvider } from './src/SimpleNavigation';
import SimpleNavigation from './src/SimpleNavigation';

const App = () => {
  return (
    <NavigationProvider>
      <SimpleNavigation />
    </NavigationProvider>
  );
};

export default App; 