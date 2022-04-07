import React, { useEffect, useState } from 'react';
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

import OwnPlans from './src/screens/planesUserScreens/OwnPlans';
import UserWillAttendPlans from './src/screens/planesUserScreens/UserWillAttendPlans';
import UserHistoryPlans from './src/screens/planesUserScreens/UserHistoryPlans';
import ComentScreen from "./src/screens/ComentScreen";

// Configuracion de Store redux
import {store} from './src/store/index';
import {Provider} from 'react-redux';
//--------------------------------------
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {userData} from './src/store/user';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const token_storage = '@Token';
const user_storage = '@userData';

const Stack = createNativeStackNavigator();

const appWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

function App() {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);

  const user = useSelector(state => state.user);

  useEffect(async () => {
    try {
      const token = await JSON.parse(AsyncStorage.getItem('@Token'));
      if (!token) return;
      dispatch(userData(token))
    } catch (error) {
      console.error({ err });
    }
  }, []);

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
        <Stack.Screen name="Comentarios" component={ComentScreen} />

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

export default appWrapper;
