import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import {Input, Button} from 'react-native-elements';

import eventos from '../utils/fakeData';
import {color} from 'react-native-elements/dist/helpers';

const CatalogScreen = () => {
  const renderItem = item => {
    const {
      nombre,
      id,
      Categoría,
      fecha,
      hora,
      image,
      Ubicación,
      privado,
      price,
    } = item;

    return privado === false ? (
      <View style={styles.itemWrapper}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View style={styles.infoWrapper}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#900'}}>
            {nombre}
          </Text>
          <Text style={{color: 'black'}}>{Categoría}</Text>
          <Text style={{fontSize: 10, color: 'black'}}>{Ubicación}</Text>
          {/* <Text>{fecha}</Text> */}
          <Text>${price}</Text>
        </View>
      </View>
    ) : null;
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filterEvents = eventos.filter(e => e.Categoría === searchTerm);
    setResults(filterEvents);
  };

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Category"
          // placeholderTextColor={'black'}
          onChangeText={value => setSearchTerm(value)}
        />
        <TouchableOpacity
          style={styles.buttonSearch}
          title="Search"
          onPress={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Catalogo de eventos públicos</Text>
        <FlatList
          data={results[0] ? results : eventos}
          renderItem={({item}) => renderItem(item)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    marginBottom: 120,
  },
  itemWrapper: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'transparent',
    flexDirection: 'row',
    width: 300,
    height: 120,
    marginTop: 5,
    marginBottom: 5,
  },
  contentWrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
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
  // input
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSearch: {
    borderWidth: 2,
    borderColor: '#900',
    marginLeft: 10,
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  searchInput: {
    borderBottomWidth: 3,
    borderBottomColor: '#900',
    paddingHorizontal: 4,
    color: 'black',
    borderRadius: 3,
  },
});

export default CatalogScreen;
