/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#faf',
        flex: 1,
      }}>
      <View
        style={{
          height: '60%',
          width: '100%',
          backgroundColor: '#afa',
          //justifyContent: 'space-between',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: '100%',
            width: '40%',
            backgroundColor: '#dfe',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: '#ab5',
              height: 60,
              width: 60,
            }}></View>

          <View
            style={{
              backgroundColor: '#fff',
              height: 60,
              width: 60,
            }}></View>
        </View>

        <View
          style={{
            height: '100%',
            width: '40%',
            backgroundColor: '#a4d',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              height: 60,
              width: 60,
            }}></View>

          <View
            style={{
              backgroundColor: '#fff',
              height: 60,
              width: 60,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default App;
