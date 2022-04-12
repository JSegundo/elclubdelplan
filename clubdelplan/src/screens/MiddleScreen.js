import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Register from './RegisterScreen';
import LogInScreen from './LogInScreen';
import UserProfileScreen from './UserProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token_storage = '@Token';
const user_storage = '@userData';

const MiddleScreen = () => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  useEffect(() => {
    async function getTokenAndUser() {
      try {
        let responseToken = await AsyncStorage.getItem(token_storage);
        let responseUser = await AsyncStorage.getItem(user_storage);
        console.log(">>", responseToken);
        setToken(JSON.parse(responseToken));
        setUser(JSON.parse(responseUser));
      } catch ({err}) {
        console.error({err});
      }
    }
    getTokenAndUser();
  }, []);

  return (
    <View>
      {token ? (
        <UserProfileScreen></UserProfileScreen>
      ) : (
        <LogInScreen></LogInScreen>
      )}
    </View>
  );
};

export default MiddleScreen;
