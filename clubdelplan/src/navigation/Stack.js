import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../screens/RegisterScreen';
const Stack = createStackNavigator();


function MyStack() {
    return (
      <Stack.Navigator>
        
        <Stack.Screen name="Register" component={Register} />

      </Stack.Navigator>
    );
  }

export default MyStack