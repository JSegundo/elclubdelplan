
import React, { useEffect } from 'react';
import { Text, View, TextInput, Button , Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import UserProfileScreen from './UserProfileScreen';
import { useNavigation } from '@react-navigation/native';

const token_storage = '@Token'
const user_storage = '@userData'

const Log = () => {
  const [email, onChangeText] = React.useState(null);
  const [psw, onChangeNumber] = React.useState(null);
  const [user , setUser] = React.useState(null)
  const [token , setToken] = React.useState(null)
  const navigation = useNavigation();


  useEffect(() => {
    async function getTokenAndUser() {
      let responseToken = await AsyncStorage.getItem(token_storage)
      let responseUser = await AsyncStorage.getItem(user_storage)
      // console.log('aqui estoy esperando el store de user' , responseUser)
      setToken(responseToken)
      setUser(responseUser)
      // console.log('aqui seteo al renderizar el user' , token)

    } 
    getTokenAndUser()
  }, [])

  const onSubmit = async () => {
    console.log(email)
    const valid = {
      email,
      password : psw,
    }
    try {
      const response = await axios.post("http://localhost:3001/api/users/login" , valid )
      setUser(response.data.user)
      const tokenPrev = JSON.stringify(response.data.token)
      setToken(tokenPrev)
      await AsyncStorage.setItem('@Token', tokenPrev)
    
      console.log("este este es el user onSubit", response.data.user)
      const userJson = JSON.stringify(response.data.user)
      
      await AsyncStorage.setItem("@userData" , userJson)
     
    } catch (e) {
      console.error(e)
    }
  }
  // console.log(user)
  // console.log(token)
  return (

    token ?  (
      <UserProfileScreen/>
      
    ) : (
      <View style={styles.view}>
      <Text style={styles.tittlePrincipal}>Bienvenido al club del plan</Text>
        <Text style={styles.tittle}>Por favor ingresa tu cuenta para seguir!</Text>
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
          onPress={() => { navigation.navigate('RegisterScreen') }}>
          <View >
            <Text style={{color: 'white', fontSize: 16}}>Registrarse</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={onSubmit}>
          <View >
            <Text style={{color: 'white', fontSize: 16}}>Iniciar sesion</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  );
}



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
  tittlePrincipal : {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#111',
    marginTop: 10,
    marginBottom: 0,

    fontSize: 30,
    padding: 1,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
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
  buttonLogin : {
    backgroundColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 8,
  }
}
export default Log;
