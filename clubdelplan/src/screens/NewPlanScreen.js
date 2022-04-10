import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import {getAllUsers} from '../store/user/allUsers';

import {Button, CheckBox, Icon, Input} from 'react-native-elements';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {createEvent} from '../store/event';
import {launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateField from 'react-native-datefield';
import axios from 'axios';

const NewPlanScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [text, onChangeText] = useState('');
  const [description, onChangeDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, onChangeLocation] = useState('');
  const [guests, setGuests] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [paymentLimitDate, setPaymentLimitDate] = useState(new Date());
  const [image, setImage] = useState('https://via.placeholder.com/300x150');
  const [pricePerPerson, setPricePerPerson] = useState(null);
  const [privadoCheck, setPrivadoCheck] = useState(true);
  const [submited, setSubmited] = useState(false);
  const [Plan, setPlan] = useState(null);

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
    guests,
  };

  const refreshPage = () => {
    onChangeText('');
    onChangeDescription('');
    setCategory('');
    onChangeLocation('');
    setStartDate(new Date());
    setEndDate(new Date());
    setPaymentLimitDate(new Date());
    setImage('https://via.placeholder.com/300x150');
    setPricePerPerson('');
    setPrivadoCheck(true);
    setSubmited(false);
  };

  const onSubmit = e => {
    e.preventDefault();
    setSubmited(true);
    console.log(' nuevo plan on submit', newPlan);
    dispatch(createEvent(newPlan)).then(res => setPlan(res.payload));
  };

  // buscar usuarios para agregar al evento
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers()).then(users => setAllUsers(users.payload));
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  const searchUsers = e => {
    const results = allUsers
      ? allUsers
          .filter(user => user.name.toLowerCase().includes(e.toLowerCase()))
          .splice(0, 4)
      : '';
    console.log(results);
    setSearchQuery(results);
  };

  const renderSearchResults = item => {
    console.log(item);
    let {name, _id, email} = item;
    return (
      <TouchableOpacity
        styles={{flexDirection: 'row', marginRight: 30}}
        onPress={(name, _id) => addGuest(name)}>
        <Text
          style={{
            fontSize: 20,
            marginRight: 30,
          }}>
          {name}
        </Text>
        <Ionicons
          name="person-add"
          style={{fontSize: 18, paddingLeft: 20, color: '#208383'}}
        />
      </TouchableOpacity>
    );
  };

  const addGuest = user => {
    console.log(user);
    // setGuests(user);
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

        {/* INVITADOS */}
        <View style={{width: '100%', height: 200}}>
          <Input
            label={'Elegí a los invitados'}
            placeholder={'Busca por nombre de usuario'}
            onChangeText={searchUsers}
          />
          {/* <View style={{width: '100%'}}> */}
          <FlatList
            data={searchQuery}
            renderItem={({item}) => renderSearchResults(item)}
            horizontal={true}
            style={{width: '100%', paddingHorizontal: 10}}
          />
          {/* </View> */}
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
        {submited ? (
          <View>
            <TouchableOpacity
              style={styles.btnVerPlan}
              onPress={() => navigation.navigate('Plan', {item: Plan})}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Ver plan
              </Text>
              <Ionicons
                style={styles.btnIcon}
                name="checkmark-outline"></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCrearPlan} onPress={refreshPage}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Crear otro plan
              </Text>
              <Ionicons
                style={styles.btnIcon}
                name="checkmark-outline"></Ionicons>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.btnCrearPlan} onPress={onSubmit}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Crear Plan
            </Text>
            <Ionicons
              style={styles.btnIcon}
              name="checkmark-outline"></Ionicons>
          </TouchableOpacity>
        )}
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
  btnVerPlan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
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
