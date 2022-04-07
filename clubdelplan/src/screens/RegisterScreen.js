import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { userRegister } from "../store/user";

const Register = () => {
  const [name, onChangeName] = useState(null);
  const [email, onChangeText] = useState(null);
  const [psw, onChangePsw] = useState(null);
  const [number, onChangePhone] = useState(null);
  const [city, onChangeCity] = useState(null);

  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onRegister = async () => {
    // let validEMail = /([a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9_-]+)/gi.test(email);

    // if(!validEMail) {
    //   return alert('Inalid email')
    // }

    // let password = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/.test(psw);

    // if(!password){
    //   return alert("Ivalid password")
    // }
      try {
      dispatch(userRegister({
        name,
        email,
        city,
        password: psw,
      })).then((res) => {
        alert("Usuario creado con éxito");
        console.log("USUARIO->", user);
        navigation.navigate('LogInScreen');
      })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.view}>
        <Text style={styles.tittle}>Please register to see your Profile!</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          placeholder="name"
          placeholderTextColor="#808080"
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="email"
          placeholderTextColor="#808080"
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePhone}
          placeholder="phone"
          placeholderTextColor="#808080"
          value={number}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCity}
          placeholder="city"
          placeholderTextColor="#808080"
          value={city}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePsw}
          value={psw}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity onPress={onRegister} style={styles.buttonRegister}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  tittle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
    marginTop: 10,
    fontWeight: 'bold',
  },
  view: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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
  buttonRegister: {
    width: 300,
    backgroundColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 6,
  },
};
export default Register;
