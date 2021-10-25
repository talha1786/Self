/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';

export class BasicsTwo extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View
          style={{
            height: 200,
            backgroundColor: '#fa2',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              backgroundColor: '#fff',
              width: '70%',
              borderColor: 'red',
              // borderLeftColor: 'red',
              // borderRightColor: 'red',
              // borderTopColor: 'red',
              // borderBottomColor: 'red',
              borderWidth: 2,
              // borderLeftWidth: 2,
              // borderRightWidth: 2,
              // borderTopWidth: 2,
              // borderBottomWidth: 2,
              // borderRadius: 17,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 20,
              paddingLeft: 20,
              maxHeight: 80,

              color: 'green',
            }}
            placeholder={'Enter Name'}
            placeholderTextColor={'red'}
            // underlineColorAndriod={'#000'}
            multiline={true}
            // maxLength={4}
          />
        </View>
      </View>
    );
  }
}
