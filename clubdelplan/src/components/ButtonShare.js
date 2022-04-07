import {
  View,
  Text,
  Button,
  Linking,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ButtonShare = ({item}) => {
  const handleEmailPress = async () => {
    await Linking.openURL(
      `mailto:destinatario?subjet=Nuevo evento&body=${mensajePredefinido}`,
    );
  };

  const {
    name,
    description,
    location,
    startDate,
    endDate,
    paymentLimitDate,
    privado,
    category,
    image,
    pricePerPerson,
  } = item;

  const mensajePredefinido = `Hola! te invito a mi evento ${
    privado ? 'privado' : 'publico'
  } , ${name}, ${description},en ${location} el dia ${startDate
    ?.split('T')[0]
    .split('-')
    .join('/')}`;

  const handleWhatsappPress = async () => {
    await Linking.openURL(`https://wa.me/?text=${mensajePredefinido}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSub}>
        <Text style={styles.text_1}> COMPARTIR PLAN </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '50%',
        }}>
        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={handleEmailPress}>
            <Ionicons
              name="mail"
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 30,
                padding: 20,
                borderRadius: 15,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={handleWhatsappPress}>
            <Ionicons
              name="logo-whatsapp"
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 30,
                padding: 20,
                borderRadius: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ButtonShare;

const styles = StyleSheet.create({
  text_0: {
    color: 'black',
    margin: 4,
    fontSize: 10,
  },
  text_1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    color: 'white',
    alignContent: 'center',
  },
  buttonWrap: {
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  containerSub: {
    alignItems: 'center',
    paddingBottom: 25,
  },
});
