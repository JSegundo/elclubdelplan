import {View, Text, Button, Linking, StyleSheet, Modal} from 'react-native';
import React from 'react';

const ButtonShare = () => {
  const handleEmailPress = async () => {
    await Linking.openURL(
      'mailto:destinatario?subjet=Nuevo evento&body=Confirmar evento',
    );
  };

  const handleWhatsappPress = async () => {
    await Linking.openURL('https://wa.me/?text=Mensaje predefinido');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSub}>
        <Text style={styles.text_1}> Compartir </Text>
      </View>

      <Text>
        <View style={styles.buttonWrap}>
          <Text 
            style={styles.button} 
            title="Email" 
            onPress={handleEmailPress}>
            Email
          </Text>
        </View>

        <View style={styles.buttonWrap}>
          <Text
            style={styles.button}
            title="Whatsapp"
            onPress={handleWhatsappPress}>
            Whatsapp
          </Text>
        </View>
      </Text>
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
  },
  button: {
    color: 'white',
    borderRadius: 50,
    alignContent: 'center',
    paddingVertical: 12,
  },
  buttonWrap: {
    marginHorizontal: 20,
    // marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 50,
    width: 150,
    height: 50,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderWidth: 0.2,
    borderColor: 'green',
    borderRadius: 20,
  },
  containerSub: {
    alignItems: 'center',
    paddingBottom: 25,
  },
});
