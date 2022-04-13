import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
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
      willAttend,
      eventOwner,
      guests,
    } = item;

    const invitados = guests.length;
    const confirmados = willAttend.length;
    console.log("OWN PLANS", ownPlans)

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
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#B90303'}}>
              {name}
            </Text>
            <Text style={({fontSize: 12}, {color: 'black'})}>
              {startDate?.split('T')[0]}
            </Text>
            {confirmados ? (
              <Text style={({fontSize: 12}, {color: 'black'})}>
                {confirmados} asistirán a tu evento
              </Text>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{marginBottom: 20}}>
      <Text style={styles.title}>Tus planes</Text>
      {ownPlans.length === 0 ? (
        <View>
          <Text style={styles.noEvents}>Aún no tenés ningún evento creado</Text>
          <Text style={styles.emoji}>😪</Text>
        </View>
      ) : null}

      {userCategories.map(category =>
        category[0] ? (
          <View>
            <Text style={styles.itemTitle}>{category[0].category}</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
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
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 20,
    marginBottom: 0,
    fontSize: 30,
  },
  itemTitle: {
    color: 'black',
    marginTop: 30,
    marginLeft: 18,
    marginBottom: 15,
    fontSize: 22,
    padding: 1,
    fontWeight: 'bold',
  },
  noEvents: {
    color: 'black',
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 22,
    padding: 1,
    fontWeight: 'bold',
  },
  asistiras: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  infoWrapper: {
    padding: 10,
  },
  confirmButtonWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 15,
    alignItems: 'center',
    width: 195,
    height: 50,
    backgroundColor: '#B90303',
    borderRadius: 8,
  },
  textButton: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  pageWrapper: {
    marginBottom: 20,
  },
  itemWrapper: {
    width: 200,
    height: 250,
    marginHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    margin: 0,
    width: '100%',
  },
  nombreEvento: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 5,
    marginLeft: 5,
  },
  image: {
    width: 200,
    height: '58%',
    borderRadius: 16,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
  },
  startDate: {
    marginEnd: 20,
    // marginTop: 8,
  },
  emoji: {
    marginTop: 20,
    fontSize: 50,
    marginLeft: 159,
  }
});

export default OwnPlans;
