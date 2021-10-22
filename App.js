/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

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
      <View
        style={{
          backgroundColor: '#fa3f',
          height: '40%',
          width: '100%',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            height: '60%',
            width: '50%',
            paddingLeft: 10,
          }}>
          <View
            style={{
              backgroundColor: '#000',
              height: 70,
              width: 70,
              marginTop: 10,
            }}></View>
          <View
            style={{
              backgroundColor: '#af3d',
              height: 70,
              width: 70,
              marginTop: 10,
            }}></View>
        </View>

        <View
          style={{
            height: '50%',
            width: '100%',
            backgroundColor: '#f54',
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              fontStyle: 'italic',
              textAlign: 'center',
              color: '#fff',
              // fontFamily: 'lucida grande',
            }}
            numberOfLines={3}>
            Hello World {'\n'}My Name is Talha Khan
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
