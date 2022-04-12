import React, { useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import categories from '../../utils/categories';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


const EditPref = () => {
  const [arrCategories, setCategories] = React.useState(categories)
  const user = useSelector(state => state.user);
  const [preferences , setPreferences] = React.useState(user.preferences)
  console.log("edit userr => :", user)

  useEffect(() => {
    let arr = categories.map((item, index) => {
      if(user.preferences.includes(item.categoryName)){
        item.isSelected = true
      }
      else{
        item.isSelected = false
      }
      return {...item}
    })
    console.log(arr)
    setCategories(arr)
  }, [])


  const handlePress = (item,ind) => {

    let arrPreferences = [...preferences]
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

    if(item.isSelected) {
      arrPreferences.push(item)
      setPreferences(arrPreferences)
    }

    setCategories(arr)
  };

  handleEdit = () =>{
    const newPreferences = {
      preferences
    }
    console.log(newPreferences)
    // try {
    //   const response = await axios.put(
    //     'http://localhost:3001/api/users/register',
    //     newPreferences,
    //   );
    //   console.log(response);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  return (
    <View>
      <View>
        { 
          arrCategories?.map((item, index) => {
          return <TouchableOpacity
            onPress={() => handlePress(item, index)}
            style={styles.pressable}
          >
            <Text style={{ color: 'white' }}>{item.categoryName}</Text>
            <Text style={{ color: "white" }}>{item.isSelected ? 'Seleccionado' : 'Seleccionar'}</Text>
          </TouchableOpacity>
        })}

      </View>
      <TouchableOpacity  onPress={() => handleEdit()} style={styles.buttonRegister}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
          Confirmar Preferencias
        </Text>
      </TouchableOpacity>
    </View>
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

    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
    borderRadius: 15,
    borderStyle: 'solid',
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: '#208383',
    margin: 8,
    elevation: 5,
    width: 250,
    height: 40,
  },
};

export default EditPref;
