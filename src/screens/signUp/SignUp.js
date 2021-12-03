/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  AsyncStorage,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppBtn, AppInput, NavHeader} from '../../components';
export class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  sendData = (param, param2) => {
    console.warn('this is param1 = ' + param);
    console.warn('this is param2 = ' + param2);
  };
  sendData2 = sign => {
    console.warn('this is sign = ' + sign);
  };
  createUser = () => {
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.state.name === ''
      ? alert('Name is required')
      : this.state.email === ''
      ? alert('email is required')
      : this.state.password.length < 8
      ? alert('password must contain 8 characters')
      : AsyncStorage.setItem('userData', JSON.stringify(data), () => {
          this.props.navigation.navigate('TabNavigator');
        });
  };
  render() {
    return (
      <ImageBackground
        source={require('../../assets/bkkk.jpg')}
        style={{
          flex: 1,
          //   backgroundColor: '#faf',
        }}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 2,
            // backgroundColor: '#f5a3',
          }}>
          <View
            style={{
              // backgroundColor: '#a1f',
              flex: 1,
            }}>
            <NavHeader title={'SignUp'} />
            <View
              style={{
                height: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  // backgroundColor: '#aaf',
                  height: 120,
                  width: 120,
                  borderWidth: 0.5,
                  borderRadius: 60,
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'red',
                }}>
                <Image
                  source={require('../../assets/user.png')}
                  style={{
                    resizeMode: 'contain',
                    height: '80%',
                    width: '80%',
                  }}
                />
              </View>
            </View>

            <View
              style={{
                height: 350,
                // backgroundColor: 'white',
                padding: 15,
              }}>
              <AppInput
                ic={'ios-person'}
                placeholder={'Name'}
                placeholderTextColor={'#000'}
                onChangeText={txt => this.setState({name: txt})}
              />

              <AppInput
                ic={'ios-mail'}
                placeholder={'Email'}
                placeholderTextColor={'#000'}
                onChangeText={txt => this.setState({email: txt})}
                st={{
                  marginTop: 10,
                  marginBottom: 10,
                }}
              />

              <View
                style={{
                  height: 55,
                  // backgroundColor: '#faf',
                  flexDirection: 'row',
                  borderWidth: 0.5,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '15%',
                    // backgroundColor: '#aaf',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 0.5,
                  }}>
                  <Ionicons name={'lock-closed'} size={20} color={'red'} />
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '75%',
                    // backgroundColor: '#aaf',
                  }}>
                  <TextInput
                    onChangeText={txt => this.setState({password: txt})}
                    style={{
                      height: '100%',
                      width: '100%',
                      paddingLeft: 10,
                    }}
                    placeholder={'Password'}
                    placeholderTextColor={'#000'}
                    secureTextEntry={this.state.secureTxt}
                  />
                </View>

                {this.state.password !== '' ? (
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({secureTxt: !this.state.secureTxt})
                    }
                    style={{
                      height: '100%',
                      width: '10%',
                      // backgroundColor: '#aaf',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Ionicons
                      name={
                        this.state.secureTxt ? 'eye-outline' : 'eye-off-outline'
                      }
                      size={20}
                      color={'red'}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>

              <TouchableOpacity
                onPress={() => {
                  console.warn('1');
                  console.log('2');
                }}
                style={{
                  marginTop: 10,
                  marginLeft: 30,
                }}>
                <Text
                  style={{
                    color: '#000',
                  }}>
                  Forget Password.!
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  width: '100%',
                  marginTop: 40,
                  alignItems: 'center',
                }}>
                <AppBtn
                  onPress={() => this.createUser()}
                  txt={'Create Account'}
                />
              </View>
            </View>

            <View
              style={{
                // backgroundColor: '#faf',
                height: 100,
                flexDirection: 'row',
                justifyContent: 'center',
                // padding: 15,
              }}>
              <Text
                style={{
                  marginTop: 5,
                  color: '#000',
                }}>
                already have an account?{'  '}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('BasicsTwo');
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
      </ImageBackground>
    );
  }
}
