import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {userOwnPlans} from '../../store/user/userEvents';
import {useNavigation} from '@react-navigation/native';

const OwnPlans = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const ownPlans = useSelector(store => store.userEvents);

  useEffect(() => {
    dispatch(userOwnPlans());
  }, []);

  const userCategories = [];

  ownPlans[0]
    ? userCategories.push(ownPlans.filter(ev => ev.category === 'Cine'))
    : '';
  ownPlans[0]
    ? userCategories.push(ownPlans.filter(ev => ev.category === 'Fiesta'))
    : '';
  ownPlans[0]
    ? userCategories.push(ownPlans.filter(ev => ev.category === 'Bar'))
    : '';
  ownPlans[0]
    ? userCategories.push(
        ownPlans.filter(ev => ev.category === 'Evento social'),
      )
    : '';
  ownPlans[0]
    ? userCategories.push(ownPlans.filter(ev => ev.category === 'Deportes'))
    : '';
  ownPlans[0]
    ? userCategories.push(ownPlans.filter(ev => ev.category === 'Gastronomía'))
    : '';
  ownPlans[0]
    ? userCategories.push(ownPlans.filter(ev => ev.category === 'Concierto'))
    : '';

  console.log('USERCATEGORIES --> ', userCategories);

  //render items
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
      totalPrice,
      eventOwner,
    } = item;

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Plan', {item: item});
        }}>
        <View style={styles.itemWrapper} key={item.id}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <View style={styles.infoWrapper}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#900'}}>
              {name}
            </Text>
            <Text style={({fontSize: 12}, {color: 'black'})}>
              {startDate?.split('T')[0]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{marginBottom: 50}}>
      <Text
        style={styles.title}>
        Planes que creaste
      </Text>
      {/**[ [{},{}], [{},{}], [""] ] */}
      {userCategories.map(category =>
        category[0] ? (
          <View>
            <Text style={styles.subtitle}>{category[0].category}</Text>
            <FlatList
              data={category}
              renderItem={({item}) => renderItem(item)}
              style={styles.flatlist}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
        ) : null,
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // pageWrapper: {
  //   marginBottom: 120,
  // },
  itemWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'transparent',
    width: 300,
    height: 80,
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 10,
    marginBottom: 0,
    // marginLeft: 18,
    fontSize: 30,
    padding: 1,
  },
  subtitle: {
    color: '#000000',
    marginTop: 40,
    marginBottom: -20,
    marginLeft: 18,
    fontSize: 22,
    padding: 1,
    fontWeight: 'bold',
  },
  contentWrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  infoWrapper: {
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 8,
    width: 160,
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
  },
  // flatlist: {
  //   justifyContent: 'center',
  // },
});

export default OwnPlans;
