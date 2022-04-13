import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllEvents} from '../store/event';
import {useNavigation} from '@react-navigation/native';
import {DropdownCategories} from '../components/DropdownCategories';
import axios from 'axios';

const CatalogScreen = () => {
  const eventos = useSelector(state => state.event);
  let dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  const renderItem = item => {
    const {name, category, image, location, pricePerPerson} = item;

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
            {pricePerPerson ? <Text>${pricePerPerson}</Text> : null}
          </View>
        </View>
      </TouchableOpacity>
    ) : null;
  };

  // busqueda multifiltro
  const [showBusquedaAvanzada, setShowBusquedaAvanzada] = useState(false);

  // GET list of categories available
  const [allCategories, setAllCategories] = useState(null);
  useEffect(() => {
    async function getAllCategories() {
      try {
        const responseCat = await axios.get(
          'http://localhost:3001/api/categories',
        );
        setAllCategories(responseCat.data);
      } catch (err) {
        console.error(err);
      }
    }
    getAllCategories();
  }, []);
  const dataCategories = allCategories?.map(cat => ({
    label: cat.categoryName,
    value: cat.categoryName,
  }));
  const [categorySelected, setCategorySelected] = useState('');
  const [fechaSelected, setFechaSelected] = useState('');
  const [precioSelected, setPrecioSelected] = useState('');
  const dataFechas = [
    {label: 'Hoy', value: 'hoy'},
    {label: 'Mañana', value: 'mañana'},
    {label: 'Esta semana', value: 'esta semana'},
    {label: 'Este mes', value: 'este mes'},
  ];
  const dataPrices = [
    {label: 'Gratis', value: 'gratis'},
    {label: 'Pago', value: 'pago'},
    // {label: 'Esta semana', value: 'esta semana'},
    // {label: 'Este mes', value: 'este mes'},
  ];

  // busqueda input text
  const [results, setResults] = useState([]);
  const handleSearch = e => {
    const filterEvents = eventos
      ? eventos.filter(
          ev =>
            ev.category.toLowerCase().includes(e.toLowerCase()) ||
            ev.name.toLowerCase().includes(e.toLowerCase()),
        )
      : '';
    setResults(filterEvents);
  };

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Busca por categoría o título"
          placeholderTextColor={'black'}
          onChangeText={handleSearch}
        />
      </View>

      <View style={{paddingHorizontal: 4}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <DropdownCategories
            placeholder="Categorias"
            data={dataCategories}
            value={categorySelected}
            onChange={item => {
              setCategorySelected(item.value);
            }}
          />
          <DropdownCategories
            placeholder="Fecha"
            data={dataFechas}
            value={fechaSelected}
            onChange={item => {
              setFechaSelected(item.value);
            }}
          />
          <DropdownCategories
            placeholder="Precio"
            data={dataPrices}
            value={precioSelected}
            onChange={item => {
              setPrecioSelected(item.value);
            }}
          />
        </ScrollView>
      </View>

      <View style={styles.contentWrapper}>
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
    marginBottom: 166,
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
  searchInput: {
    borderBottomWidth: 3,
    borderBottomColor: '#900',
    paddingHorizontal: 4,
    color: '#111',
    borderRadius: 3,
    width: 230,
  },

  // filters
});

export default CatalogScreen;
