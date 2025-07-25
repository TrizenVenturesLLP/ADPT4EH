import React from 'react';
import { Platform } from 'react-native';
import LandingScreen from './src/LandingScreen';
import WebLanding from './src/WebLanding';

const App = () => {
  if (Platform.OS === 'web') {
    return <WebLanding />;
  }
  return <LandingScreen />;
};

export default App; 