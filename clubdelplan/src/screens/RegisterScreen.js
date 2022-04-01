import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import axios from 'axios';

const Register = ({navigation}) => {
  const [name, onChangeName] = React.useState(null);
  const [email, onChangeText] = React.useState(null);
  const [psw, onChangePsw] = React.useState(null);
  const [number, onChangePhone] = React.useState(null);
  const [city, onChangeCity] = React.useState(null);

  const onRegister = async () => {
    // let validEMail = /([a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9_-]+)/gi.test(email);

    // if(!validEMail) {
    //   return alert('Inalid email')
    // }

    // let password = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/.test(psw);

    // if(!password){
    //   return alert("Ivalid password")
    // }

    const newUser = {
      name,
      email,
      city,
      password: psw,
    };
    console.log(newUser);
    try {
      const response = await axios.post(
        'http://localhost:3001/api/users/register',
        newUser,
      );
      if (response) navigation.navigate('LogInScreen');
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
      <Button title="Register" onPress={onRegister}></Button>
    </View>
  );
};

const styles = {
  tittle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: '#111',
  },
};
export default Register;
