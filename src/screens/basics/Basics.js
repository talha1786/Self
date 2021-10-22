/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';

export class Basics extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#faf',
          flex: 1,
        }}>
        <View
          style={{
            height: '40%',
            width: '100%',
            backgroundColor: '#afa',

            justifyContent: 'space-between',

            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '40%',
              backgroundColor: '#aa2',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                backgroundColor: '#000',
                height: 70,
                width: 70,
              }}
            />

            <View
              style={{
                backgroundColor: '#a4a',
                height: 70,
                width: 70,
              }}
            />
          </View>

          <View
            style={{
              height: '100%',
              width: '40%',
              backgroundColor: '#a07',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#000',
                height: 70,
                width: 70,
              }}
            />

            <View
              style={{
                backgroundColor: '#fff',
                height: 70,
                width: 70,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: '60%',
            width: '100%',
            backgroundColor: '#aaf',
          }}>
          <View
            style={{
              height: '50%',
              width: '50%',
              backgroundColor: '#fff',
              // paddingTop: 10,
              paddingLeft: 10,
            }}>
            <View
              style={{
                height: 70,
                width: 70,
                backgroundColor: '#000',
                marginTop: 10,
              }}
            />

            <View
              style={{
                height: 70,
                width: 70,
                backgroundColor: '#faf',
                marginTop: 10,
              }}
            />
          </View>

          <View
            style={{
              height: '50%',
              width: '100%',
              backgroundColor: '#a5a4',
              // alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 26,
                color: '#fff',
                fontWeight: 'bold',
                fontStyle: 'italic',
                textAlign: 'center',
              }}
              numberOfLines={2}>
              hello world {'\n'} what are u doing
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
