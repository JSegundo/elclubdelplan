import React, { useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
const token_storage = '@Token';
const user_storage = '@userData';
import {ScrollView} from 'react-native-gesture-handler';
import RedSocialButton from '../components/RedSocialButton';


const Log = () => {
  const [email, onChangeText] = React.useState(null);
  const [psw, onChangeNumber] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState('');
  const navigation = useNavigation();


  useEffect(() => {
    async function getTokenAndUser() {
      let responseToken = await AsyncStorage.getItem(token_storage);
      let responseUser = await AsyncStorage.getItem(user_storage);

      // console.log('aqui estoy esperando el store de user' , responseUser)
      let tokenParsed = JSON.parse(responseToken);

      setToken(tokenParsed);
      setUser(responseUser);

    }
    getTokenAndUser();
  }, []);

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
      // console.log(tokenPrev)
      setToken(tokenPrev);
      await AsyncStorage.setItem('@Token', tokenPrev);

      // console.log('este este es el user onSubit', response.data.user);
      const userJson = JSON.stringify(response.data.user);
      await AsyncStorage.setItem('@userData', userJson);
      
      navigation.replace('MiddleApp');

    } catch (e) {
      setError('Email o contraseña incorrecta!');
      console.error(e);
    }
  };
  // console.log(user)
  // console.log(token)
  return (
    <ScrollView
      contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.view}>
        <Text style={styles.tittlePrincipal}>'Bienvenido al club del plan'</Text>
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

        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        {/* <View>{error && <Text>{error}</Text>}</View> */}
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => {
            navigation.navigate('Register');
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

        <View style={styles.marginB}>
          <RedSocialButton />
        </View> 
        
      </View>
    </ScrollView>
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
  buttonRegister: {
    width: 300,
    backgroundColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonLogin: {
    width: 300,
    backgroundColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 80,
  },
  marginB:{
    marginBottom: 100,
  }
};
export default Log;
