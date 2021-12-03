/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class TabList extends React.Component {
  state = {
    data: [
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },

      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
    ],
    num: 1,
  };

  renderColumn = item => (
    <View
      style={{
        height: this.state.num === 1 ? h('25%') : h('10%'),
        width:
          this.state.num === 1
            ? '97%'
            : this.state.num === 2
            ? '46%'
            : this.state.num === 3
            ? w('30%')
            : w('23%'),
        // backgroundColor: '#faf',
        margin: h('0.5%'),

        // flexDirection: 'row',

        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        // borderColor: 'grey',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={item.img}
        style={{
          height: h('25%'),
          width: h('60%'),
          resizeMode: 'cover',
          // borderRadius: h('4%'),
        }}
      />
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Tab List'}
          leftIc={'ios-list'}
          leftPressed={() => {
            console.warn('Left');
          }}
        />

        <View
          style={{
            height: h('9%'),
            width: w('99%'),
            // backgroundColor: '#faf',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => this.setState({num: 1})}
            style={{
              height: h('7%'),
              width: '20%',
              backgroundColor: '#fa3',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: h('1%'),
              borderWidth: h('0.2'),
              borderRadius: h('2'),
            }}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({num: 2})}
            style={{
              height: h('7%'),
              width: '20%',
              backgroundColor: '#fa3',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: h('1%'),
              borderWidth: h('0.2'),
              borderRadius: h('2'),
            }}>
            <Text>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({num: 3})}
            style={{
              height: h('7%'),
              width: '20%',
              backgroundColor: '#fa4',
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: h('9'),
              marginLeft: h('1%'),
              borderWidth: h('0.2'),
              borderRadius: h('2'),
            }}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({num: 4})}
            style={{
              height: h('7%'),
              width: '20%',
              backgroundColor: '#fa3',
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: h('9'),
              marginLeft: h('1%'),
              borderWidth: h('0.2'),
              borderRadius: h('2'),
            }}>
            <Text>4</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          key={
            this.state.num === 1
              ? '1'
              : this.state.num === 2
              ? '2'
              : this.state.num === 3
              ? '3'
              : '4'
          }
          numColumns={
            this.state.num === 1
              ? 1
              : this.state.num === 2
              ? 2
              : this.state.num === 3
              ? 3
              : 4
          }
          data={this.state.data}
          renderItem={({item, index}) => this.renderColumn(item, index)}
          // renderItem={({item, index}) => this.renderDesign(item, index)}
          keyExtractor={(index, item) => item.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
