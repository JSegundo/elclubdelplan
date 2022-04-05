import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Tabs from './src/navigation/Tabs.js';
import Register from './src/screens/RegisterScreen.js';
import LogInScreen from './src/screens/LogInScreen';
import UserProfileScreen from './src/screens/UserProfileScreen.js';
import CardEvent from './src/screens/CardEventScreen.js';
import NewPlanScreen from './src/screens/NewPlanScreen.js';
import PaymentDetails from './src/screens/PaypmentDetails.js';

import OwnPlans from './src/screens/planesUserScreens/OwnPlans';
import UserWillAttendPlans from './src/screens/planesUserScreens/UserWillAttendPlans';
import UserHistoryPlans from './src/screens/planesUserScreens/UserHistoryPlans';

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
          options={{headerShown: false}}
        />
        <Stack.Screen name="RegisterScreen" component={Register} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="Plan" component={CardEvent} />
        <Stack.Screen name="NewPlanScreen" component={NewPlanScreen} />
        <Stack.Screen name="Detalles de entrada" component={PaymentDetails} />

        <Stack.Screen
          name="Tus planes"
          component={OwnPlans}
          options={{headerShadowVisible: false}}
        />
        <Stack.Screen
          name="Fuiste invitado"
          component={UserWillAttendPlans}
          options={{headerShadowVisible: false}}
        />
        <Stack.Screen
          name="Historial"
          component={UserHistoryPlans}
          options={{headerShadowVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
