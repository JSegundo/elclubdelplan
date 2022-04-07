import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

// Configuracion de Store redux
import {store} from './src/store/index.js';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen.js';
import MiddleApp from './src/screens/MiddleApp.js';
//--------------------------------------

const user_storage = '@userData';

const Stack = createNativeStackNavigator();


function App() {

  return (
    <Provider store = {store}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MiddleApp" options={{headerShown: false}} component={MiddleApp} ></Stack.Screen>
        </Stack.Navigator> 
    </NavigationContainer>
    </Provider>
  );
}

export default App;
