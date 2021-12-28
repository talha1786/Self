/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavHeader} from '../../components';
export class Dashboard extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    user: {},
  };

  componentDidMount = () => {
    AsyncStorage.getItem('userData', (err, res) => {
      if (!err && res !== null) {
        const data = JSON.parse(res);
        this.setState({
          user: data,
          name: data.name,
          email: data.email,
          password: data.password,
        });
      }
    });
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../../assets/bgg.jpg')}
        style={{
          flex: 1,
          //   backgroundColor: '#faf',
        }}>
        <View
          style={{
            // backgroundColor: '#faf',
            flex: 1,
          }}>
          <NavHeader
            leftIc={'ios-list'}
            title={'Dashboard'}
            leftPressed={() => {
              navigation.openDrawer();
            }}
            rightIc={'exit-outline'}
            rightPressed={() => {
              AsyncStorage.removeItem('userData', () => {
                this.props.navigation.replace('SignUp');
              });
            }}
            custom
          />

          <View
            style={{
              height: '15%',
              // backgroundColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('List');
              }}
              style={{
                height: '90%',
                width: '90%',
                borderColor: 'red',
                borderRadius: 10,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                }}>
                List
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '15%',
              // backgroundColor: '#a4a',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ImgPick');
              }}
              style={{
                height: '90%',
                width: '90%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                }}>
                Image Picker
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '15%',
              // backgroundColor: '#a4a',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ColumnList');
              }}
              style={{
                height: '90%',
                width: '90%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                }}>
                Column List
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '15%',
              // backgroundColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                const navProps = {
                  name: this.state.name,
                  email: this.state.email,
                  password: this.state.password,
                };
                this.props.navigation.navigate('EditProfile', navProps);
              }}
              style={{
                height: '90%',
                width: '90%',
                borderColor: 'red',
                borderRadius: 10,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '15%',
              // backgroundColor: '#a4a',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('DateTimePick');
              }}
              style={{
                height: '90%',
                width: '90%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                }}>
                Date Time Picker
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
