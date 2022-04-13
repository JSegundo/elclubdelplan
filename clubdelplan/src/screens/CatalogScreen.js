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
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEvents } from '../store/event';
import { getAllCategories } from '../store/categories';
import { useNavigation } from '@react-navigation/native';
import { DropdownCategories } from '../components/DropdownCategories';

const CatalogScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  //Inputs
  const [searchTerm, setSearchTerm] = useState('');
  const [categorySelected, setCategorySelected] = useState('');
  const [fechaSelected, setFechaSelected] = useState('');
  const [precioSelected, setPrecioSelected] = useState('');

  //Stores
  const eventos = useSelector(state => state.event);
  const allCategories = useSelector(state => state.categories);
  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(getAllCategories());
  }, []);

  // Dropdown Arrays Filters
  const dataCategories = allCategories?.map(cat => ({
    label: cat.categoryName,
    value: cat.categoryName,
  }));
  const dataFechas = [
    { label: 'Hoy', value: 'hoy' },
    { label: 'Mañana', value: 'mañana' },
    { label: 'Esta semana', value: 'esta semana' },
    { label: 'Este mes', value: 'este mes' },
  ];
  const dataPrices = [
    { label: 'Gratis', value: 'gratis' },
    { label: 'Pago', value: 'pago' },
  ];

  //  Search
  const [results, setResults] = useState([]);
  useEffect(() => {}, [results]);

  const handleSearch = e => {
    const filterEvents = eventos
      ? eventos.filter(
        ev =>
          //ev.category.toLowerCase().includes(e.toLowerCase()) ||
          ev.name.toLowerCase().includes(e.toLowerCase()),
      )
      : '';
    setResults(filterEvents);
  };

  const handleCategory = () => {
    const filterEvents = eventos
      ? eventos.filter(ev => ev.category === categorySelected) : '';
    setResults(filterEvents);
  };

  const handleDate = () => {
    const filterEvents = eventos
      ? eventos.filter(ev => {
        const eventDate = new Date(ev.startDate);
        eventDate.setHours(0,0,0,0);
        console.log("FECHA INICIO EVENTO->", eventDate.getDate());
        const today = new Date();
        today.setHours(0,0,0,0);
        switch (fechaSelected) {
          case 'hoy':
            console.log("HOY->", today.getTime());
            return eventDate.getTime() == today.getTime();
          case 'mañana':
            const tomorrow = new Date(today);
            tomorrow.setHours(0,0,0,0);
            tomorrow.setDate(tomorrow.getDate() + 1);
            console.log("MAÑANA->", tomorrow.getTime());
            return eventDate.getTime() == tomorrow.getTime();
          case 'esta semana':
            const week = new Date(today);
            week.setDate(week.getDate() + 7);
            console.log("SEMANA->", week.getTime());
            return eventDate.getTime() >= today.getTime() && ev.startDate <= week.getTime();
          case 'este mes':
            const month = new Date(today);
            month.setHours(0,0,0,0);
            month.setDate(month.getDate() + 31);
            console.log("MES->", month.getTime());
            return eventDate.getTime() >= today.getTime() && ev.startDate <= month.getTime();
        }
      })
      : '';
    console.log("EVENTOS A MOSTRAR->", filterEvents);
    setResults(filterEvents);
  };

  const handlePrice = () => {
    const filterEvents = eventos
      ? eventos.filter(ev => precioSelected === 'pago'
        ? ev.pricePerPerson > 0
        : ev.pricePerPerson === 0)
      : '';
    setResults(filterEvents);
  };

  const onSubmit = () => {
    const filterCategories = eventos
      ? eventos.filter(ev => ev.category === categorySelected) : eventos;
    const filterPrice = filterCategories
      ? filterCategories.filter(ev => precioSelected === 'pago'
        ? ev.pricePerPerson > 0
        : ev.pricePerPerson <= 0)
      : filterCategories;
    setResults(filterPrice);
  };

  const renderItem = item => {
    const { name, category, image, location, pricePerPerson } = item;

    return item.isPrivate === false ? (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Plan', { item: item });
        }}>
        <View style={styles.itemWrapper}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <View style={styles.infoWrapper}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#900' }}>
              {name}
            </Text>
            <Text style={{ color: 'black' }}>{category}</Text>
            <Text style={{ fontSize: 10, color: 'black' }}>{location}</Text>
            {pricePerPerson ? <Text>${pricePerPerson}</Text> : null}
          </View>
        </View>
      </TouchableOpacity>
    ) : null;
  };

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nombre"
          placeholderTextColor={'black'}
          onChangeText={handleSearch}
        />
      </View>
      <View style={{ paddingHorizontal: 4 }}>
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
            placeholder="Precio"
            data={dataPrices}
            value={precioSelected}
            onChange={item => {
              setPrecioSelected(item.value);
            }}
          />
          <DropdownCategories
            placeholder="Fecha"
            data={dataFechas}
            value={fechaSelected}
            onChange={item => {
              setFechaSelected(item.value);
              handleDate();
            }}
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonSearch}
          title="Search"
          onPress={onSubmit}>
          <Text style={{ color: '#111' }}>Filtrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        {results[0] ? (
          <Text style={{ padding: 5 }}>{results.length} Resultados</Text>
        ) : null}

        <FlatList
          data={results[0] ? results : eventos}
          renderItem={({ item }) => renderItem(item)}
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

  // filters
});

export default CatalogScreen;
