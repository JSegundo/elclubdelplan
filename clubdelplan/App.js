import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';

import Tabs from './src/navigation/Tabs.js';

function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
