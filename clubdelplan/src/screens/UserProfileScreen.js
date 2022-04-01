import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import LogInScreen from './LogInScreen';
import axios from 'axios';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const user_storage = '@userData';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState(null);
  const [tokenUser, setToken] = useState('token');

  useEffect(() => {
    async function getUser() {
      let responseUser = await AsyncStorage.getItem(user_storage);
      let infoUser = JSON.parse(responseUser);

      setUserInfo(infoUser);
    }
    getUser();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@Token');
      await AsyncStorage.removeItem('@userData');
      setToken(null);
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  console.log(userInfo);

  return userInfo?.email && tokenUser !== null ? (
    <View style={styles.profileWrapper}>
      <Image
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1',
        }}
        style={styles.imagen}
      />
      <Text style={{color: '#111', fontSize: 20, fontWeight: 'bold'}}>
        {userInfo.name}
      </Text>
      <Text style={{color: '#111'}}>{userInfo.email}</Text>

      {/* BOTONES PARA VER MIS PLANES  */}
      <ScrollView style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={styles.BtnNavigateToPlans}
          onPress={() => navigation.navigate('Tus planes')}>
          <View style={styles.textAndIconWrapper}>
            <Text style={{color: 'white', fontSize: 16}}>Mis planes</Text>
            <Ionicons name="arrow-forward" style={styles.IconBtnNav} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BtnNavigateToPlans}
          onPress={() => navigation.navigate('Fuiste invitado')}>
          <View style={styles.textAndIconWrapper}>
            <Text style={{color: 'white', fontSize: 16}}>
              Planes que me invitaron
            </Text>
            <Ionicons name="arrow-forward" style={styles.IconBtnNav} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BtnNavigateToPlans}
          onPress={() => navigation.navigate('Historial')}>
          <View style={styles.textAndIconWrapper}>
            <Text style={{color: 'white', fontSize: 16}}>Historial</Text>
            <Ionicons name="arrow-forward" style={styles.IconBtnNav} />
          </View>
        </TouchableOpacity>
      </ScrollView>
      {/* BOTONES PARA VER MIS PLANES  */}

      <TouchableOpacity onPress={logout} style={styles.logout}>
        <Text style={{color: 'white', fontSize: 16}}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <LogInScreen />
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 120,
  },
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  buttonsWrapper: {
    marginVertical: 10,
  },
  BtnNavigateToPlans: {
    backgroundColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 8,
  },
  IconBtnNav: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
  textAndIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logout: {
    backgroundColor: '#B81414',
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 8,
  },
});

export default UserProfileScreen;
