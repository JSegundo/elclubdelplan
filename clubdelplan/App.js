import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';

import Tabs from './src/navigation/Tabs.js';
import HomeScreen from './src/screens/HomeScreen.js';

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen/>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
