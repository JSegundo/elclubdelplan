import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonShare from '../components/ButtonShare';


const CardEvent = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const {item} = route.params;
  const {
    time,
    image,
    name,
    location,
    startDate,
    totalPrice,
    description,
    coments,
    endDate,
  } = item;
  const fakeMapImage =
    'https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=38.11779&lon=13.35869&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*';

  const dateNow = new Date();
  const eventDate = new Date(endDate);

  const renderItem = item => {
    const {userName, coment, vote} = item;
    return (
      <View style={styles.reviewWrapper}>
        <View style={{padding: 4}}>
          <Text style={styles.nombreUsuario}>{userName}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textComent}>{coment}</Text>
            <Text style={styles.textComent}>{vote}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.cardWrap}>
          <Image style={styles.image} source={{uri: image}} />
          <Text style={styles.title}>{name}</Text>
          <Ionicons
            name="house-outline"
            size={18}
            color="#900"
            style={styles.text}>
            <Text style={styles.text}>{location}</Text>
          </Ionicons>
          <Ionicons
            name="ticket-outline"
            size={18}
            color="#900"
            style={styles.text}>
            <Text style={styles.text}>{startDate}</Text>
          </Ionicons>
          <Ionicons name="phone" size={18} color="#900" style={styles.text}>
            <Text style={styles.text}>{time}</Text>
          </Ionicons>
          <Ionicons name="phone" size={18} color="#900" style={styles.text}>
            <Text> ARS {totalPrice}</Text>
          </Ionicons>   
          {/* Boton para compartir */}
          <ButtonShare /> 

          <View>
            {/* <Text style={styles.line}>─────────────────────────</Text> */}
            <Text style={styles.subtitle}>Descripción</Text>
            <Text style={styles.text}>
              {description} Un evento es todo acontecimiento previamente
              organizado que reúne a un determinado número de personas en tiempo
              y lugar preestablecidos, que desarrollarán y compartirán una serie
              de actividades afines a un mismo objetivo para estímulo del
              comercio, la industria, el intercambio social y la cultura
              general.
            </Text>
          </View>

          <View>
            <Text style={styles.line}>─────────────────────────</Text>
            <Text style={styles.subtitle}>Ubicación</Text>
            <Text style={styles.text}>--Incrustar mapa real--</Text>
            <Image style={styles.mapImage} source={{uri: fakeMapImage}} />
          </View>

          <View>
            <Text style={styles.line}>─────────────────────────</Text>
            <Text style={styles.subtitle}>Más eventos como este</Text>
            <Text style={styles.text}>--Carrousel--</Text>
          </View>

          {/* poner el button -fixed- at the buttom of the screen */}

          <TouchableOpacity style={styles.buttonWrap}>
            <Text style={styles.button}>Compartir evento</Text>
          </TouchableOpacity>
        </View>

        {eventDate.getTime() < dateNow.getTime() ? (
          <View style={styles.comentWrapper}>
            <Text style={styles.line}>─────────────────────────</Text>
            <Text style={styles.subtitle}>Comentarios</Text>
            <FlatList
              contentContainerStyle={{paddingTop: 40}}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={coments}
              renderItem={({item}) => renderItem(item)}
            />
          </View>
        ) : null}
        {eventDate.getTime() < dateNow.getTime() ? (
          <TouchableOpacity
            style={styles.buttonWrap}
            onPress={() =>
              navigation.navigate('Detalles de entrada', {item: item})
            }>
            <Text style={styles.button}>Comentar</Text>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cardWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    margin: 4,
  },
  image: {
    marginTop: 30,
    width: 250,
    height: 360,
    borderRadius: 20,
  },
  mapImage: {
    marginTop: 30,
    width: 380,
    height: 250,
    borderRadius: 20,
  },
  buttonWrap: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#900',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 9,
    width: 300,
  },
  line: {
    color: 'grey',
  },
  button: {
    color: 'white',
    fontSize: 18,
  },
  comentWrapper: {
    margin: 0,
    width: '100%',
  },
  reviewWrapper: {
    width: 203,
    height: 100,
    // height: 320,
    marginHorizontal: 10,
    // padding: 2,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  nombreUsuario: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 5,
    marginLeft: 5,
  },
  textComent: {
    color: '#000000',
    fontWeight: 'bold',
    margin: 1,
    marginLeft: 5,
  },
});

export default CardEvent;
