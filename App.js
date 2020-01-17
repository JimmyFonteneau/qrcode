import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import Barercode from './Barercode.js';
import HomeScreen from './HomeScreen.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Barercode: Barercode,
  },
  {
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  // return (
  //   // <Barercode/>
  //   <HomeScreen/>
  //   //<AppContainer/>
  // );
  render() {
    return (            
      <AppContainer />                      
    );
  }   
}
