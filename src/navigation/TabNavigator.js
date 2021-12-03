import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabList} from '../screens/list';
import {DrawerNavigator} from './DrawerNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        tabBarStyle: {
          //   backgroundColor: 'red',
        },
      }}>
      <Tab.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="TabList"
        component={TabList}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="list" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
