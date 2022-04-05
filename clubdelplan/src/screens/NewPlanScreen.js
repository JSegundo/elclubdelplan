import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DateField from 'react-native-datefield';
import {Button, CheckBox, Icon} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {createEvent} from '../store/event';

import {launchImageLibrary} from 'react-native-image-picker';
const token_storage = '@Token';
const user_storage = '@userData';

const NewPlanScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [text, onChangeText] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [location, onChangeLocation] = React.useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [paymentLimitDate, setPaymentLimitDate] = useState(new Date());
  const [image, setImage] = useState('https://via.placeholder.com/300x150');
  const [pricePerPerson, setPricePerPerson] = useState(null);
  const [privadoCheck, setPrivadoCheck] = useState(true);

  // state categories for dropdown input
  const [allCategories, setAllCategories] = useState(null);
  // GET list of categories available
  useEffect(() => {
    async function getAllCategories() {
      try {
        const responseCat = await axios.get(
          'http://localhost:3001/api/categories',
        );
        setAllCategories(responseCat.data);
      } catch (err) {
        console.error(err);
      }
    }
    getAllCategories();
  }, []);
  // DATA for render in dropdown
  const data = allCategories?.map(cat => ({
    label: cat.categoryName,
    value: cat.categoryName,
  }));

  // SUBIR IMAGEN
  const selectImage = () => {
    const options = {
      title: 'Selecciona una imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.errorCode) {
        console.error(response.errorMessage);
      } else if (response.didCancel) {
        console.log('El usuario canceló');
      } else {
        const selectedImage = response.assets[0].uri;
        setImage(selectedImage);
      }
    });
  };

  // RENDER ITEMS CATEGORY DROPDOWN
  const renderItemCategory = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const newPlan = {
      name: text,
      description,
      location,
      startDate,
      endDate,
      paymentLimitDate,
      privado: privadoCheck,
      category,
      image,
      pricePerPerson,
    };

    console.log(newPlan);
    dispatch(createEvent(newPlan));
  };

  return (
    <ScrollView>
      <View style={styles.pageWrapper}>
        <Input
          label={'Nombre'}
          placeholder={'Dale un nombre a tu plan..'}
          onChangeText={onChangeText}
          value={text}
        />
        {/* DESCRIPTION  */}
        <Input
          multiline
          // numberOfLines={2}
          label={'Descripcion'}
          onChangeText={onChangeDescription}
          placeholder="Los detalles que quieras aclarar sobre tu plan.."
          value={description}
        />
        {/* CATEGORY DROPDOWN */}
        <Text style={styles.inputLabel}>Elegí la categoría</Text>
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Categorias"
          value={category}
          onChange={item => {
            setCategory(item.value);
          }}
          renderItem={renderItemCategory}
        />
        {/* LOCATION INPUT */}

        <Ionicons
          name="compass"
          style={{
            textAlign: 'center',
            color: 'green',
            fontSize: 20,
            marginTop: 20,
          }}
        />
        <Input
          onChangeText={onChangeLocation}
          placeholder={'Donde se van a encontrar?'}
          label={'Ubicación'}
          value={location}
        />
        {/* DATE input */}

        <Ionicons
          name="calendar"
          style={{textAlign: 'center', color: 'green', fontSize: 20}}
        />
        <Text style={styles.dateTitle}>Cuando inicia el evento?</Text>
        <View style={styles.datePickerWrapper}>
          <DateField
            style={{justifyContent: 'center'}}
            defaultValue={new Date()}
            styleInput={{fontSize: 15}}
            onSubmit={value => setStartDate(value)}
          />
        </View>

        <Text style={styles.dateTitle}>Cuando termina?</Text>
        <View style={styles.datePickerWrapper}>
          <DateField
            style={{justifyContent: 'center'}}
            defaultValue={new Date()}
            styleInput={{fontSize: 15}}
            onSubmit={value => setEndDate(value)}
          />
        </View>
        <Text style={styles.dateTitle}>Fecha limite de confirmación:</Text>
        <View style={styles.datePickerWrapper}>
          <DateField
            style={{justifyContent: 'center'}}
            defaultValue={new Date()}
            styleInput={{fontSize: 15}}
            onSubmit={value => setPaymentLimitDate(value)}
          />
        </View>
        {/* SELECT PRICE */}
        <View style={{marginVertical: 20}}>
          <Ionicons
            name="card"
            style={{
              textAlign: 'center',
              color: 'green',
              fontSize: 20,
            }}
          />
          <Text style={styles.dateTitle}>Precio por persona</Text>
          <TextInput
            style={styles.priceInput}
            placeholder={'$1500'}
            keyboardType="numeric"
            onChangeText={setPricePerPerson}
            value={pricePerPerson}
            maxLength={10} //setting limit of input
          />
        </View>
        {/* SELECT IMAGE */}
        <View>
          <Button title={'Seleccionar imagen'} onPress={selectImage} />
          <Image style={{width: 300, height: 150}} source={{uri: image}} />
        </View>
        {/* SET PRIVATE OR PUBLIC */}
        <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}
          iconRight
          center
          title="Mi evento es privado"
          checked={privadoCheck}
          onPress={() => {
            setPrivadoCheck(!privadoCheck);
            console.log(privadoCheck);
          }}
        />
        {!privadoCheck && (
          <Text style={{fontSize: 10, padding: 5}}>
            (Si tu evento es publico, todo el mundo podrá ver tu evento)
          </Text>
        )}
        {/* SEND DATA*/}
        <TouchableOpacity style={styles.btnCrearPlan} onPress={onSubmit}>
          <Text style={{color: 'white', textAlign: 'center'}}>Crear Plan</Text>
          <Ionicons style={styles.btnIcon} name="checkmark-outline"></Ionicons>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    padding: 10,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: '#111',
  },
  btnCrearPlan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#900',
    width: 300,
    // width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  btnIcon: {
    color: 'white',
    fontSize: 20,
  },
  dropdown: {
    margin: 16,
    height: 50,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',

    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  priceInput: {
    borderBottomColor: 'green',
    borderBottomWidth: 2,
  },
  // date
  datePickerWrapper: {
    marginBottom: 10,
    borderBottomColor: '#900',
    borderBottomWidth: 2,
  },
  dateTitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default NewPlanScreen;
