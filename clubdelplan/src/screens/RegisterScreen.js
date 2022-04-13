import React, {useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import categories from '../utils/categories';
import {ScrollView} from 'react-native-gesture-handler';

const Register = () => {
  const [name, onChangeName] = React.useState(null);
  const [email, onChangeText] = React.useState(null);
  const [psw, onChangePsw] = React.useState(null);
  const [number, onChangePhone] = React.useState(null);
  const [city, onChangeCity] = React.useState(null);
  const [preferences, setPreferences] = React.useState([]);
  // const [categories, setCategories] = React.useState(null)
  const navigation = useNavigation();
  const [error, setError] = React.useState('');
  const [arrCategories, setCategories] = React.useState(categories)

  // useEffect(()=> {
  //  async function getCategories() {
  //   const categories = await axios.get("http://localhost:3001/api/categories")
  //   setCategories(categories)
  // }
  // getCategories()
  // }, [])

  useEffect(() => {
    let arr = categories.map((item, index) => {
      item.isSelected = false
      
      return {...item}
    })
    setCategories(arr)

    console.log("arr data => " , arr)
  }, [])


  const onRegister = async () => {
    let validEMail = /([a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9_-]+)/gi.test(
      email,
    );

    if (!validEMail) {
      setError('Email invalido!');
      return;
    }

    let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(psw);
    // let password = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/.test(psw);

    if (!password) {
      setError(
        'Contraseña invalida! debe tener minimo 8 caracteres y 1 mayuscula.',
      );
      return;
    }

    const newUser = {
      name,
      email,
      city,
      password: psw,
      preferences,
    };
    console.log(preferences);
    console.log(newUser);
    try {
      const response = await axios.post(
        'http://localhost:3001/api/users/register',
        newUser,
      );

      navigation.reset({
        index: 0,
        routes: [{name: 'MiddleScreen'}],
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const handlePress = (item, ind) => {

    let arr = arrCategories.map((item,index)=> {
      if(ind == index){
        if(item.isSelected) {
          item.isSelected = false
        }
        else{
          item.isSelected = true
        }
       
      }
      return {...item}
    })
    
    setCategories(arr)
    preferences.push(item.categoryName)
    
  }


  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 200,
      }}>
      <View style={styles.view}>
        <Text style={styles.tittle}>Por favor registrate!</Text>

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
        {error ? <Text style={{color: 'red'}}>{error}</Text> : null}

        <Text style={styles.tittle}>Elije tus categorias preferidas</Text>
        <View>
          {arrCategories.map((item,index) => {
            return <TouchableOpacity
            onPress={() => handlePress(item,index)}
            style = {[
              item.isSelected ? 
              styles.pressable :
              styles.pressableFalse
            ]}
            > 
            <Text style = {{color : 'white'}}>{item.categoryName}</Text>
            <Text style = {{color : "white"}}>{ item.isSelected ? 'Seleccionado' : 'Seleccionar'}</Text>
            </TouchableOpacity>
          })}
        </View>
        <TouchableOpacity onPress={onRegister} style={styles.buttonRegister}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = {
  tittle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
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
    color: '#111'
  },
  buttonRegister: {
    width: 300,
    backgroundColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    marginTop: 30,
    borderRadius: 6,
  },
  flatListAlign: {

    alignItems: 'center',

  },
  pressable: {

    alignItems: 'center',
    paddingHorizontal: 2,
    borderRadius: 15,
    borderStyle: 'solid',
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor : "#208383",
    margin: 8,
    elevation: 5,
    width: 250,
    height: 40,
  },
  pressableFalse: {

    alignItems: 'center',
    paddingHorizontal: 2,
    borderRadius: 15,
    borderStyle: 'solid',
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor : "#1795CB",
    margin: 8,
    elevation: 5,
    width: 250,
    height: 40,
  },
};
export default Register;
