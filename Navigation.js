import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

import LoginScreen from './components/login';
import MemberList from './components/member-list'
import MemberDetails  from './components/member-details'

const MemberScreen = StackNavigator({
  MemberList: {
    screen: MemberList,
    navigationOptions: {
      headerTitle: 'List',
    },
  },
  MemberDetails: {
    screen: MemberDetails,
    navigationOptions: {
      headerTitle: 'Detail',
    },
  },
});

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  Member: {
    screen: MemberScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default RootNavigator;
