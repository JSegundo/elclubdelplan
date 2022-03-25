import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Input, Button} from 'react-native-elements';
import eventos from '../utils/fakeData';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filterEvents = eventos.map(e => e.Categoría == searchTerm);
    setResults(filterEvents);
  };

  const renderItem = (item) => {
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
        <Text>{nombre}</Text>
        <Text>{Categoría}</Text>
        <Text>{Ubicación}</Text>
      </View>
    ) : null;
  };

  return (
    <>
      <View style={styles.searchSection}>
        <Input
          placeholder="Search by Category"
          style={styles.input}
          leftIcon={{type: 'feather', name: 'search', color: '#fff'}}
          onChangeText={value => setSearchTerm(value)}
          inputContainerStyle={styles.searchInput}
          leftIconContainerStyle={styles.searchLeftIcon}
        />
        <Button
          title="Search"
          buttonStyle={styles.buttonSearch}
          onPress={() => handleSearch()}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={results}
          style={styles.container}
          renderItem={({item}) => renderItem(item)}
          numColumns={2}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    backgroundColor: '#0D0D0D',
    width: '100%',
    paddingRight: 80,
    paddingLeft: 10,
    flex: 1 / 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#2C292C',
    borderBottomWidth: 0,
    paddingHorizontal: 4,
  },
  input: {
    color: '#fff',
  },
  searchLeftIcon: {
    paddingStart: 10,
    marginRight: 7,
  },
  buttonSearch: {backgroundColor: '#229783', marginBottom: 27},
  cardImage: {
    display: 'flex',
    width: '49.5%',
    margin: 4,
    justifyContent: 'space-between',
    backgroundColor: '#2C292C',
    borderWidth: 0,
    borderRadius: 5,
  },
});

export default Search;
