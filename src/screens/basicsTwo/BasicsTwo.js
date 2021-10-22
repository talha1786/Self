/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react native';

export class BasicsTwo extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#faf',
          flex: 1,
        }}>
        <View
          style={{
            height: 100,
            backgroundColor: '#f54',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              backgroundColor: '#faf',
              height: 50,
              width: '70%',
            }}
            placeholder={'Enter Name'}
          />
        </View>
      </View>
    );
  }
}
