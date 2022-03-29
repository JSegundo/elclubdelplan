import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Tabs from '../navigation/Tabs';


const UserProfileScreen = () => {
  return (
    <View style={styles.profileWrapper}>
      <Image
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1',
        }}
        style={styles.imagen}
      />
      <Text style={{color:'#111'}}>User Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imagen: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
});

export default UserProfileScreen;