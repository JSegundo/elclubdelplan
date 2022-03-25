import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React from 'react';

import eventos from '../utils/fakeData';
import { color } from 'react-native-elements/dist/helpers';

const CatalogScreen = () => {
  const renderItem = item => {
    const {nombre, id, Categoría, fecha, hora, image, Ubicación, privado} =
      item;

    return privado === false ? (
      <View style={styles.itemWrapper}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View style={styles.infoWrapper}>
          <Text style={{fontSize: 20, fontWeight: 'bold' ,color :'#900'}}>{nombre}</Text>
          <Text style={{color: '#900'}}>{Categoría}</Text>
          <Text style={{fontSize: 10 , color: '#900'}}>{Ubicación}</Text>
        </View>
      </View>
    ) : null;
  };

  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Catalogo de eventos públicos</Text>
      <FlatList data={eventos} renderItem={({item}) => renderItem(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor : 'white',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'transparent',
    flexDirection: 'row',
    width: 300,
    height: 120,
    marginTop: 10,
    marginBottom: 10,

  },
  contentWrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  infoWrapper: {
    padding: 5,
    width: 160,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',

    padding: 10,
    fontWeight: 'bold',
    borderBottomColor: 'lightblue',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  image: {
    width: 140,
    height: '100%',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
});

export default CatalogScreen;
