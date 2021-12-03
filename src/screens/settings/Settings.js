/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class Settings extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: h('8%'),
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopWidth: h('0.05'),
            borderBottomWidth: h('0.05'),
          }}>
          <Text
            style={{
              fontSize: h('2.5%'),
            }}>
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: h('8%'),
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: h('0.05'),
          }}>
          <Text
            style={{
              fontSize: h('2.5%'),
            }}>
            Contact US
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
