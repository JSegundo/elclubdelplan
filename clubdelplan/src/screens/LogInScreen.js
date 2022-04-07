import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserProfileScreen from './UserProfileScreen';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { userData, userLogin } from "../store/user";

const Log = () => {
  const [email, onChangeText] = useState(null);
  const [psw, onChangeNumber] = useState(null);
  console.log("MAIL->", email);
  console.log("PSW->", psw);
  const user = useSelector(state => state.user);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect( () => {
    async function getUser () {
      try {
        const token = await JSON.parse(AsyncStorage.getItem('@Token'));
        dispatch(userData(token))
      } catch (error) {
        console.error({ err });
      }
    }
    getUser();
  }, []);

  const onSubmit = () => {
    try {
      dispatch(userLogin({
        email,
        password: psw,
      })).then( (res) => {
        console.log("RESPUESTA->", res);
        //const token = JSON.stringify(res.payload.token);
        //await AsyncStorage.setItem('@Token', token);
        //dispatch(userData(token));
      })
    } catch (e) {
      console.error(e);
    }
  };

  return user._id ? (
    <UserProfileScreen />
  ) : (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
            Registrarse
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin} onPress={onSubmit}>
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
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
