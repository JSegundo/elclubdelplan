import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React from 'react';

import eventos from '../utils/fakeData';

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
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{nombre}</Text>
          <Text style={{color: 'darkblue'}}>{Categoría}</Text>
          <Text style={{fontSize: 12}}>{Ubicación}</Text>
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
    borderWidth: 2,
    borderRadius: 12,
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
    marginBottom: 30,
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
