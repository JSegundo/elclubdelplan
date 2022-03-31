import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Tabs from './src/navigation/Tabs.js';
import Register from './src/screens/RegisterScreen.js';
import LogInScreen from './src/screens/LogInScreen'
import UserProfileScreen from './src/screens/UserProfileScreen.js';

// Configuracion de Store redux
import {store} from './src/store/index.js';
import {Provider} from 'react-redux';
//--------------------------------------

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RegisterScreen" component={Register} />
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
