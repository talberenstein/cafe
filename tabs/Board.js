import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';


export default class Board extends React.Component {
  static navigationOptions = {
    swipeEnabled: true
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Page2!</Text>
      </View>
    );
  }
}
