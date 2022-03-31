import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import LogInScreen from './LogInScreen'
import axios from 'axios';

const user_storage = '@userData'

const UserProfileScreen = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState(null)
  const [tokenUser, setToken] = useState("token")

  useEffect(() => {
    async function getUser() {
    
      let responseUser = await AsyncStorage.getItem(user_storage)
      let infoUser = JSON.parse(responseUser)

      setUserInfo(infoUser)
    } 
    getUser()
  }, [])


  const logout = async () =>{
    try {
      await AsyncStorage.removeItem('@Token')
      await AsyncStorage.removeItem('@userData')
      setToken(null)
    }
    catch(err){
      console.log(err)
      return false
    }
  }
 
 

  console.log(userInfo)
 
  return (
    userInfo?.email && tokenUser !== null ?
    (<View style={styles.profileWrapper}>
      <Image
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1',
        }}
        style={styles.imagen}
      />
      <Text style={{color:'#111'}}>{userInfo.email}</Text>
      <Button title= 'logout' onPress={logout}></Button>
    </View>) : (<LogInScreen/>)
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imagen: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
});

export default UserProfileScreen;