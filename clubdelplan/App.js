import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

// Configuracion de Store redux
import {store} from './src/store/index.js';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen.js';
import MiddleApp from './src/screens/MiddleApp.js';
import Tabs from './src/navigation/Tabs';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userData} from './src/store/user/user';
import {LogBox} from 'react-native';
//--------------------------------------

const user_storage = '@userData';
const token_storage = '@Token';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

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
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);

  useEffect(() => {
    async function getTokenAndUser() {
      try {
        let responseToken = await AsyncStorage.getItem(token_storage);
        let responseUser = await AsyncStorage.getItem(user_storage);
        setToken(JSON.parse(responseToken));
        setUser(JSON.parse(responseUser));
      } catch (err) {
        console.error(err);
      }
    }
    getTokenAndUser();
  }, []);

  useEffect(() => {
    if (!token) return;
    // if (!user?._id) return;
    console.log('SE RENDERIZO APP');
    dispatch(userData(token));
  }, [user, token]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}></Stack.Screen> */}
        <Stack.Screen
          name="MiddleApp"
          options={{headerShown: false}}
          component={MiddleApp}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default appWrapper;
