/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        // alignItems: 'center',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          height: 60,
          width: 60,
        }}
      />
    </View>
  );
};

export default App;
