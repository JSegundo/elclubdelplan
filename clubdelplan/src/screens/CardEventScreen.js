import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
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
  const {time, image, name, location, startDate, totalPrice, description} = item;
  const fakeMapImage = 'https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=38.11779&lon=13.35869&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*';

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
          <Ionicons name="phone" size={18} color="#900" style={styles.text}>
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
            <Image
              style={styles.mapImage}
              source={{uri: fakeMapImage}}/>
          </View>

          <View>
            <Text style={styles.line}>─────────────────────────</Text>
            <Text style={styles.subtitle}>Más eventos como este</Text>
            <Text style={styles.text}>--Carrousel--</Text>
          </View>

          {/* poner el button -fixed- at the buttom of the screen */}
          <TouchableOpacity
            style={styles.buttonWrap}
            onPress={() =>
              navigation.navigate('Detalles de entrada', {item: item})
            }>
            <Text style={styles.button}>Entradas</Text>
          </TouchableOpacity>
        </View>
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
});

export default CardEvent;
