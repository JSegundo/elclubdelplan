import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';

import HomeScreen from './src/screens/HomeScreen.jsx';
import CatalogScreen from './src/screens/CatalogScreen.jsx';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CatalogScreen" component={CatalogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#a52a2a',
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  imagen: {
    width: 200,
    height: 200,
  },
  input: {
    borderWidth: 1,
    width: 180,
  },
  Pressable: {
    borderColor: 'blue',
    backgroundColor: 'magenta',
    padding: 20,
  },
  containerInput: {
    width: '80%',
    // flex: 1,
    // alignItems: 'center',
    borderColor: 'blue',
    paddingHorizontal: 30,
  },
});

export default App;
