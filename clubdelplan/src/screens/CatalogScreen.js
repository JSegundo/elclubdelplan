import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllEvents} from '../store/event';
import {useNavigate} from 'react-router-dom';
import {useNavigation} from '@react-navigation/native';

const CatalogScreen = () => {
  const eventos = useSelector(state => state.event);
  let dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  const renderItem = item => {
    const {
      name,
      _id,
      category,
      startDate,
      time,
      image,
      location,
      isPrivate,
      pricePerPerson,
      totalPrice
    } = item;

    return item.isPrivate === false ? (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Plan', {item: item});
        }}>
        <View style={styles.itemWrapper}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <View style={styles.infoWrapper}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#900'}}>
              {name}
            </Text>
            <Text style={{color: 'black'}}>{category}</Text>
            <Text style={{fontSize: 10, color: 'black'}}>{location}</Text>
            {/* <Text>{startDate.split('T')[0]}</Text> */}
            {pricePerPerson ? <Text>${totalPrice}</Text> : null}
          </View>
        </View>
      </TouchableOpacity>
    ) : null;
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filterEvents = eventos.filter(e => e.category === searchTerm);
    setResults(filterEvents);
  };

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Busca por categoría"
          placeholderTextColor={'black'}
          onChangeText={value => setSearchTerm(value)}
        />
        <TouchableOpacity
          style={styles.buttonSearch}
          title="Search"
          onPress={handleSearch}>
          <Text style={{color: '#111'}}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Catalogo de eventos públicos</Text>
        {results[0] ? (
          <Text style={{padding: 5}}>{results.length} Resultados</Text>
        ) : null}

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
    marginBottom: 130,
  },
  infoWrapper: {
    padding: 5,
    width: 160,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#111',
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
    color: '#111',
  },
  buttonSearch: {
    borderWidth: 2,
    borderColor: '#900',
    marginLeft: 10,
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    color: '#111',
  },
  searchInput: {
    borderBottomWidth: 3,
    borderBottomColor: '#900',
    paddingHorizontal: 4,
    color: '#111',
    borderRadius: 3,
    maxWidth: 200,
  },
});

export default CatalogScreen;
