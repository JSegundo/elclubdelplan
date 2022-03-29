import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Tabs from './src/navigation/Tabs.js';
import Register from './src/screens/RegisterScreen.js';
import UserProfileScreen from './src/screens/UserProfileScreen.js';

const Stack = createNativeStackNavigator();



function App () {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
       <Stack.Screen name="RegisterScreen" component={Register} />
       <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
