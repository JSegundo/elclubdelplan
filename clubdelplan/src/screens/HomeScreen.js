import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [eventos, setEventos] = useState({});

  useEffect(() => {
    async function getAllEvents() {
      try {
        const response = await axios.get('http://localhost:3001/api/events');
        setEventos(response.data);
        //console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getAllEvents();
    //console.log(eventos);
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
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View style={{padding: 4}}>
          <Text style={styles.nombreEvento}>{name}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text}>{category}</Text>
            <Text style={styles.startDate}>{startDate.split('T')[0]}</Text>
          </View>
          <Text style={styles.text}>{location}</Text>
        </View>
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
    // height: 180,
    borderRadius: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  startDate: {
    marginEnd: 20,
    // marginTop: 8,
  },
});

export default HomeScreen;
