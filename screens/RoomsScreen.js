import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';
import Page1Screen from '../tabs/Room'
import Page2Screen from '../tabs/Board'
import Page3Screen from '../tabs/Following'
import Page4Screen from '../tabs/Bookmark'


const Page1Stack = createStackNavigator({
  Page1Screen
});

Page1Stack.navigationOptions = {
  tabBarLabel: 'Home',
  swipeEnabled: false,
  tabBarOptions: {
    inactiveTintColor: '#131521',
    showLabel: true,
    showIcon: false,
    tintColor: '#000000',
    activeTintColor: '#fa1e2a',
    style: {
    backgroundColor: '#ffffff' // TabBar background
  }
  }
};

const Page2Stack = createStackNavigator({
  Page2: Page2Screen,
});

Page2Stack.navigationOptions = {
  tabBarLabel: 'My Rooms',
  swipeEnabled: false,
  tabBarOptions: {
    inactiveTintColor: '#131521',
    showLabel: true,
    showIcon: false,
    tintColor: '#000000',
    activeTintColor: '#fa1e2a',
  style: {
    backgroundColor: '#ffffff' // TabBar background
  }
  }
};

const Page3Stack = createStackNavigator({
  Page3Screen
});

Page3Stack.navigationOptions = {
  tabBarLabel: 'Following',
  animationEnabled: false,
  tabBarOptions: {
    inactiveTintColor: '#131521',
    showLabel: true,
    showIcon: false,
    tintColor: '#000000',
    activeTintColor: '#fa1e2a',
    style: {
    backgroundColor: '#ffffff' // TabBar background
  }
  }
};

const Page4Stack = createStackNavigator({
  Page4Screen
});

Page4Stack.navigationOptions = {
  tabBarLabel: 'Bookmark',
  animationEnabled: false,
  tabBarOptions: {
    inactiveTintColor: '#131521',
    showLabel: true,
    showIcon: false,
    tintColor: '#000000',
    activeTintColor: '#fa1e2a',
    style: {
    backgroundColor: '#ffffff' // TabBar background
  }
  }
};

const AppNavigator = createMaterialTopTabNavigator({
  Page1Stack,
  Page2Stack,
  Page3Stack,
  Page4Stack,
});

const App = createAppContainer(AppNavigator);

//export default App



export default class RoomsScreen extends React.Component{
  static path = "";
  static App = createAppContainer(AppNavigator);
  static navigationOptions = {
    title: 'My Rooms',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
    shadowColor: 'transparent'
  };
  render(){
    return(
      <App/>
    )
  }
}

