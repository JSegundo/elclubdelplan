import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  Pressable,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import categories from '../../utils/categories';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const token_storage = '@Token';
const EditPref = () => {
  const navigation = useNavigation();
  const [arrCategories, setCategories] = React.useState(categories);
  const user = useSelector(state => state.user);
  const [preferences, setPreferences] = React.useState(user.preferences);
  const [backColor, setBackColor] = React.useState('#208383');
  const [token, setToken] = React.useState(null);
  let arrPreferences = [...preferences];

  async function getTokenAndUser() {
    try {
      let responseToken = await AsyncStorage.getItem(token_storage);
      setToken(JSON.parse(responseToken));
    } catch ({err}) {
      console.error({err});
    }
  }
  getTokenAndUser();

  useEffect(() => {
    let arr = categories.map((item, index) => {
      if (user.preferences.includes(item.categoryName)) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return {...item};
    });
    setCategories(arr);
  }, []);

  const handlePress = (item, ind) => {
    let arr = arrCategories.map((item, index) => {
      if (ind == index) {
        if (item.isSelected) {
          item.isSelected = false;
        } else {
          item.isSelected = true;
        }
      }
      return {...item};
    });

    if (item.isSelected) {
      arrPreferences.push(item.categoryName);
    } else {
      let deleteItem = arrPreferences.indexOf(item);
      arrPreferences.splice(deleteItem, 1);
    }

    setPreferences(arrPreferences);
  };

  handleAlert = () => {
    Alert.alert(
      'Desea confirmar las preferencias?',
      'Confirmar preferencia',
      [
        {
          text: 'No',
          onPress: () => console.log('No button clicked'),
          style: 'cancel',
        },
        {text: 'Si', onPress: () => handleEdit()},
      ],
      {
        cancelable: true,
      },
    );
  };

  handleEdit = () => {
    const newPreferences = {
      preferences,
    };
    async function sendPreferences() {
      try {
        const response = await axios.put(
          `http://localhost:3001/api/users/${user._id}`,
          newPreferences,
          {
            headers: {authorization: `Bearer ${token}`},
          },
        );
        navigation.replace('MiddleApp');
      } catch (err) {
        console.error(err);
      }
    }
    sendPreferences();
  };

  return (
    <ScrollView contentContainerStyle={styles.touchWrapper}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          marginBottom: 20,
          fontWeight: 'bold',
        }}>
        Edita tus categorias de preferencia !
      </Text>
      <View>
        {arrCategories?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(item, index)}
              style={[
                item.isSelected ? styles.pressable : styles.pressableFalse,
              ]}>
              <Text style={{color: 'white'}}>{item.categoryName}</Text>
              <Text style={{color: 'white'}}>
                {item.isSelected ? 'Seleccionado' : 'Seleccionar'}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => handleAlert()}
        style={styles.buttonRegister}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>
          Confirmar Preferencias
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  buttonRegister: {
    width: 300,
    backgroundColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 6,
  },
  pressable: {
    alignItems: 'center',
    paddingHorizontal: 2,
    borderRadius: 15,
    borderStyle: 'solid',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#208383',
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
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#1795CB',
    margin: 8,
    elevation: 5,
    width: 250,
    height: 40,
  },
  touchWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
};

export default EditPref;
