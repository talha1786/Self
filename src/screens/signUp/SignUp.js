/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class SignUp extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            // backgroundColor: '#a1f',
            flex: 1,
          }}>
          <View
            style={{
              //   backgroundColor: 'gray',
              height: '17%',
            }}
          />
          <View
            style={{
              //   backgroundColor: '#fff',
              paddingLeft: 25,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#000',
              }}>
              welcome
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
              }}>
              glad to see you!
            </Text>
          </View>
          <View
            style={{
              //   backgroundColor: 'gray',
              height: '10%',
            }}
          />

          <View
            style={{
              height: '50%',
              //   backgroundColor: 'green',
              padding: 15,
            }}>
            <TextInput
              style={{
                borderColor: 'red',
                borderBottomWidth: 0.5,
                color: 'blue',
              }}
              placeholder={'Name'}
              placeholderTextColor={'black'}
            />
            <TextInput
              style={{
                borderColor: 'red',
                borderBottomWidth: 0.5,
                marginTop: 10,
              }}
              placeholder={'Email'}
              placeholderTextColor={'black'}
              keyboardType={'email-address'}
            />

            <TextInput
              style={{
                borderColor: 'red',
                borderBottomWidth: 0.5,
                marginTop: 10,
              }}
              placeholder={'Password'}
              placeholderTextColor={'black'}
              secureTextEntry
            />
            <View
              style={{
                width: '100%',
                marginTop: 40,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: '70%',
                  backgroundColor: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
