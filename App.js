import 'react-native-gesture-handler';
import React from 'react';
// import {View, Text} from 'react-native';
import {ScreenNavigator} from './src/navigation/ScreenNavigator';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
const App = () => {
  return <ScreenNavigator />;
};

export default App;
