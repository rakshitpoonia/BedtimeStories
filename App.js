import * as React from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StoryWriting from './screens/WriteScreen';
import StoryReading from './screens/ReadScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  StoryWriting: {screen: StoryWriting},
  StoryReading: {screen: StoryReading},
})
const AppContainer =  createAppContainer(TabNavigator);