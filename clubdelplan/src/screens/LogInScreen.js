import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, TextInput, Button , Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Log = ({ navigation }) => {
  const [email, onChangeText] = React.useState(null);
  const [psw, onChangeNumber] = React.useState(null);
  const [isSignedIn, changeSignIn] = React.useState(false)
  const onSubmit = async () => {
    const valid = {
      email,
      password : psw,
    }
    try {
      const response = await axios.post("http://localhost:3001/api/users/login" , valid )
      const token = JSON.stringify(response.token)
      await AsyncStorage.setItem('@Token', token)
    } catch (e) {
      console.error(e)
    }
  }

  return (

    isSignedIn ?  (
      <View style={styles.profileWrapper}>
        <Image
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1',
          }}
          style={styles.imagen}
        />
        <Text style={{ color: '#111' }}>User Name</Text>
        <Button title="LogOut" onPress={() => changeSignIn(false)}></Button>
      </View>
    ) : (
      <View style={styles.view}>
        <Text style={styles.tittle}>Please log in to see your Profile!</Text>
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
        <Button title="Register" onPress={() => { navigation.navigate('RegisterScreen') }}></Button>
        <Button title="Login" onPress={() => onSubmit}></Button>
      </View>
    )
  );
}



const styles = {
  tittle: { color: 'black', textAlign: 'center', fontSize: 20, marginBottom: 50, fontWeight: 'bold' },
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
    color: '#111'
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
  }
}
export default Log;
