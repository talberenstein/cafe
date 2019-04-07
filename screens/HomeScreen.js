import React from 'react';
import {
  ImageBackground,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

import { Ionicons } from '@expo/vector-icons';

import { WebBrowser } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import RoomsScreen from './RoomsScreen';


 
export default class  HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ImageBackground source={require('../assets/images/cafe_bg_3.jpeg')} style={styles.background}>
        <View style={styles.welcomeCafe}>
          <Text style={{color: 'white', fontSize: 30, fontWeight: "700"}}>cafe</Text>
        </View>
        <View style={styles.welcomeSearch}>
          <Ionicons color='white' size={30} name="ios-search" onPress={() => console.log('Search')}/>
        </View>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            {this.getStarted()}
          </View>
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }

  getStarted() {
      return (
        <View style={{alignContent: 'center'}}>
        <Text style={styles.developmentModeText}>
          You are not joining any Room. Find your own of your interest and decorate the home screen.
        </Text>
        <View style={styles.findACafeBtn}>
          <AwesomeButtonRick onPress={() => console.log('Search')} type="anchor">Find your room</AwesomeButtonRick>
        </View>
      </View>
      );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

/*

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Rooms: RoomsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <AppContainer />;
  }
}

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%', 
    height: '100%',
  },
  findACafeBtn: {
    justifyContent: 'center',
    alignItems: 'center'
 },
  developmentModeText: {
    marginTop: 430,
    marginBottom: 15,
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    textAlign: 'center',
    alignSelf: 'center'
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeCafe: {
    marginTop: 45,
    marginLeft: 20,
    marginBottom: 20,
    flexDirection: 'row'
  },
  welcomeSearch: {
    marginTop: -46,
    marginLeft: 20,
    marginBottom: 20,
    flexDirection: 'row-reverse'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -300,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
