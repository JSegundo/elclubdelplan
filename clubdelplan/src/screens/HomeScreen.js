import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllEvents} from '../store/event';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userData} from '../store/user';

const token_storage = '@Token';

const HomeScreen = () => {
  const eventos = useSelector(state => state.event);
  let dispatch = useDispatch();
  const navigation = useNavigation();

  const [token, setToken] = React.useState(null);

  useEffect(() => {
    async function getTokenAndUser() {
      try {
        let responseToken = await AsyncStorage.getItem(token_storage);
        setToken(JSON.parse(responseToken));
      } catch (err) {
        console.error(err);
      }
    }
    getTokenAndUser();
  }, []);

  useEffect(() => {
    if (!token) return;
    console.log('SE RENDERIZO APP');
    dispatch(userData(token));
  }, [token]);

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  // filtro por categoría para mostrar en sus respectivos carruseles.
  // arrays que se les pasa a los Flatlist's en "data"
  const eventosCine = eventos[0]
    ? eventos.filter(ev => ev.category === 'Cinema')
    : '';
  const eventosFiesta = eventos[0]
    ? eventos.filter(ev => ev.category === 'Party')
    : '';
  const eventosBares = eventos[0]
    ? eventos.filter(ev => ev.category === 'Bar')
    : '';
  const seleccionEspecial = eventos[0]
    ? eventos.filter(ev => ev.category === 'Concert')
    : '';

  const renderItem = item => {
    const {
      name,
      _id,
      category,
      startDate,
      time,
      image,
      location,
      isPrivate,
      totalPrice,
    } = item;

    return item.isPrivate === false ? (
      <View style={styles.itemWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Plan', {item: item});
          }}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <View style={{padding: 4}}>
            <Text style={styles.nombreEvento}>{name}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text}>{category}</Text>
              <Text style={styles.startDate}>{startDate.split('T')[0]}</Text>
            </View>
            <Text style={styles.text}>{location}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ) : null;
  };

  return (
    <View style={styles.pageWrapper}>
      <ScrollView>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>El Club del Plan</Text>

          <Text style={styles.subtitle}>Nuestra selección para vos</Text>
          <FlatList
            contentContainerStyle={{paddingTop: 40}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={seleccionEspecial}
            renderItem={({item}) => renderItem(item)}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.subtitle}>Fiesta</Text>
          <FlatList
            contentContainerStyle={{paddingTop: 40}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={eventosFiesta}
            renderItem={({item}) => renderItem(item)}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.subtitle}>Cine</Text>
          <FlatList
            contentContainerStyle={{paddingTop: 40}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={eventosCine}
            renderItem={({item}) => renderItem(item)}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.subtitle}>Bares</Text>
          <FlatList
            contentContainerStyle={{paddingTop: 40}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={eventosBares}
            renderItem={({item}) => renderItem(item)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    marginBottom: 80,
  },
  itemWrapper: {
    width: 203,
    height: 250,
    // height: 320,
    marginHorizontal: 10,
    // padding: 2,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    margin: 0,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 10,
    marginBottom: 0,
    // marginLeft: 18,
    fontSize: 30,
    padding: 1,
  },
  subtitle: {
    color: '#000000',
    marginTop: 40,
    marginBottom: -20,
    marginLeft: 18,
    fontSize: 22,
    padding: 1,
    fontWeight: 'bold',
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    margin: 1,
    marginLeft: 5,
  },
  nombreEvento: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 5,
    marginLeft: 5,
  },
  image: {
    width: 200,
    height: '58%',
    borderRadius: 16,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
  },
  startDate: {
    marginEnd: 20,
    // marginTop: 8,
  },
});

export default HomeScreen;
