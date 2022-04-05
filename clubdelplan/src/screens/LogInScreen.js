import React, {useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import UserProfileScreen from './UserProfileScreen';
import {useNavigation} from '@react-navigation/native';

const token_storage = '@Token';
const user_storage = '@userData';

import {userData} from '../store/user';
import {useDispatch} from 'react-redux';

const Log = () => {
  const dispatch = useDispatch();

  const [email, onChangeText] = React.useState(null);
  const [psw, onChangeNumber] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const navigation = useNavigation();

  const onSubmit = async () => {
    const valid = {
      email,
      password: psw,
    };
    try {
      const response = await axios.post(
        'http://localhost:3001/api/users/login',
        valid,
      );
      setUser(response.data.user);
      const tokenPrev = JSON.stringify(response.data.token);
      setToken(tokenPrev);
      await AsyncStorage.setItem('@Token', tokenPrev);
      const userJson = JSON.stringify(response.data.user);
      await AsyncStorage.setItem('@userData', userJson);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    async function getTokenAndUser() {
      try {
        let responseToken = await AsyncStorage.getItem(token_storage);
        let responseUser = await AsyncStorage.getItem(user_storage);
        setToken(JSON.parse(responseToken));
        setUser(JSON.parse(responseUser));
      } catch ({err}) {
        console.error({err});
      }
    }
    getTokenAndUser();
  }, []);

  useEffect(() => {
    if (!token) return;
    if (!user?._id) return;
    const userid = user._id;
    dispatch(userData({userid, token}));
  }, []);

  return token ? (
    <UserProfileScreen />
  ) : (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.view}>
        <Text style={styles.tittlePrincipal}>Bienvenido al club del plan</Text>
        <Text style={styles.tittle}>
          Por favor ingresa tu cuenta para seguir!
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="email"
          placeholderTextColor="#808080"
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={psw}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
            Registrarse
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin} onPress={onSubmit}>
          <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
            Iniciar sesion
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  tittle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#208383',
    marginTop: 10,
    marginBottom: 0,
    // marginLeft: 18,
    fontSize: 20,
    padding: 1,
  },
  tittlePrincipal: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#111',
    marginTop: 10,
    marginBottom: 0,
    width: 300,
    fontSize: 24,
    padding: 10,
  },
  view: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  input: {
    width: 300,
    height: 50,
    margin: 10,
    borderWidth: 4,
    padding: 10,
    borderRadius: 10,
    borderColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 26,
  },
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
  buttonLogin: {
    width: 300,
    backgroundColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 6,
  },
};
export default Log;
