import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Tabs from './src/navigation/Tabs.js';
import Register from './src/screens/RegisterScreen.js';
import LogInScreen from './src/screens/LogInScreen';
import UserProfileScreen from './src/screens/UserProfileScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OwnPlans from './src/screens/planesUserScreens/OwnPlans';
import UserWillAttendPlans from './src/screens/planesUserScreens/UserWillAttendPlans';
import UserHistoryPlans from './src/screens/planesUserScreens/UserHistoryPlans';
import middleScreen from './src/screens/MiddleScreen.js';

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
