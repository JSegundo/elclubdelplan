import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const token_storage = '@Token';

const CreatePassRedSocial = ({route}) => {
  const {email, name, familyName, givenName, id, photo} = route.params.user;
  const [psw, setPsw] = useState(null);
  const navigation = useNavigation();
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);

  const onSubmit = async () => {
    const existUser = await axios.post(
      'http://localhost:3001/api/users/google',
      {
        email,
      },
    );

    if (existUser.data.email) {
      try {
        const responseLogin = await axios.post(
          'http://localhost:3001/api/users/login',
          {
            email,
            password: psw,
          },
        );

        setUser(responseLogin.data.user);
        const tokenPrev = JSON.stringify(responseLogin.data.token);

        setToken(tokenPrev);
        await AsyncStorage.setItem('@Token', tokenPrev);

        const userJson = JSON.stringify(responseLogin.data.user);
        await AsyncStorage.setItem('@userData', userJson);
        navigation.replace('MiddleApp');
      } catch (error) {
        Alert.alert(
          'OPS!',
          'Las contraseñas no coinciden.. Volver a intentar..',
        );
      }
    } else {
      const newUser = {
        name,
        email,
        city: '',
        password: psw,
        preferences: [],
        // photo,
      };

      try {
        const responseRegister = await axios.post(
          'http://localhost:3001/api/users/register',
          newUser,
        );

        const responseLogin = await axios.post(
          'http://localhost:3001/api/users/login',
          {
            email,
            password: psw,
          },
        );

        setUser(responseLogin.data.user);
        const tokenPrev = JSON.stringify(responseLogin.data.token);

        setToken(tokenPrev);
        await AsyncStorage.setItem('@Token', tokenPrev);

        const userJson = JSON.stringify(responseLogin.data.user);
        await AsyncStorage.setItem('@userData', userJson);
        navigation.replace('MiddleApp');
      } catch (error) {
        console.error('ERROR EN CREAR CONTRASEÑA REDSOCIAL', error);
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.view}>
        <Text style={styles.tittlePrincipal}>El club del plan</Text>
        <Text style={styles.tittle}>
          Por favor crea tu contraseña para seguir!
        </Text>
        <TextInput
          style={styles.input}
          color={'#808080'}
          editable={false}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPsw}
          value={psw}
          secureTextEntry={true}
          placeholder="contraseña"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={onSubmit}>
          <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
            Iniciar sesion
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreatePassRedSocial;

const styles = StyleSheet.create({
  tittle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#208383',
    marginTop: 10,
    marginBottom: 0,
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
    color: '#111',
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
});
