/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class BasicsTwo extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
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

          <View
            style={{
              height: 100,
              backgroundColor: '#fb35',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Ionicons name={'mail'} size={25} color={'red'} />
            <TextInput
              style={{
                backgroundColor: '#fff',
                width: '70%',
                borderColor: 'red',
                borderWidth: 2,
                // borderRightWidth: 20,
                borderRadius: 10,
                paddingLeft: 10,
                // paddingRight: 20,
                // paddingTop: 10,
                // paddingBottom: 10,

                color: 'green',
              }}
              placeholder={'Email'}
              placeholderTextColor={'red'}
              keyboardType={'email-address'}
              value={'chtalhakhan7271@gmail.com'}
              editable={false}
            />
          </View>

          <View
            style={{
              height: 100,
              backgroundColor: '#f343',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                backgroundColor: '#fff',
                width: '70%',
                borderColor: 'red',
                borderWidth: 2,
                borderRadius: 10,
                paddingLeft: 20,

                color: 'green',
              }}
              placeholder={'password'}
              placeholderTextColor={'red'}
              secureTextEntry={true}
            />
          </View>

          <View
            style={{
              height: 100,
              backgroundColor: '#a53a',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                backgroundColor: '#fff',
                width: '70%',
                borderColor: 'red',
                borderWidth: 2,
                borderRadius: 10,
                paddingLeft: 20,

                color: 'green',
              }}
              placeholder={'phone'}
              placeholderTextColor={'red'}
              maxLength={11}
              keyboardType={'phone-pad'}
            />
          </View>

          <View
            style={{
              height: 150,
              backgroundColor: '#faf',
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
