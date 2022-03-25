import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React from 'react';
import eventos from '../utils/fakeData';

const HomeScreen = () => {

  const renderItem = item => {
    const {nombre, Categoría, image, Ubicación, destacado} =
      item;

    return destacado === true ? (
      <View style={styles.itemWrapper}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <Text>{nombre}</Text>
        <Text>{Categoría}</Text>
        <Text>{Ubicación}</Text>
      </View>
    ) : null;
  };

  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.title}>Destacados</Text>
      <FlatList data={eventos} renderItem={({item}) => renderItem(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    borderColor: 'blue',
    borderWidth: 2,
    // flexDirection: 'row',
    width: 300,
    borderBottomColor: 'blue',
    backgroundColor: 'lightblue',
    marginTop: 10,
    marginBottom: 10,
  },
  contentWrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 6,
  },
});

export default HomeScreen;
