/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class SignUp extends React.Component {
  sendData = (param, param2) => {
    console.warn('this is param1 = ' + param);
    console.warn('this is param2 = ' + param2);
  };
  sendData2 = sign => {
    console.warn('this is sign = ' + sign);
  };
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
          backgroundColor: '#f5a3',
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
              height: '45%',
              // backgroundColor: 'white',
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
                // backgroundColor: '#faf',
                // height: '10%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={{
                  // marginTop: 5,
                  color: 'black',
                }}>
                forget password
              </Text>
            </View>

            <View
              style={{
                width: '100%',
                marginTop: 40,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  const param = 'created';
                  const param2 = 'already created';
                  this.sendData(param, param2);
                }}
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

          <View
            style={{
              // backgroundColor: '#faf',
              height: '10%',
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 15,
            }}>
            <Text
              style={{
                marginTop: 5,
              }}>
              already have an account?{'  '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                const sign = 'signIn';
                this.sendData2(sign);
              }}>
              <Text
                style={{
                  color: 'red',
                  textDecorationLine: 'underline',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
