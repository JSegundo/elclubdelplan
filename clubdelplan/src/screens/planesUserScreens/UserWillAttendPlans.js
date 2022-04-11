import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { userAttendPlans } from '../../store/user/userEvents';
import { useNavigation } from '@react-navigation/native';
import { addGuest } from '../../store/singleEvent';

const UserWillAttendPlans = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const attendPlans = useSelector(store => store.userEvents);
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch(userAttendPlans());
  }, []);

  //FILTRO DE ARREGLOS
  const confirmEvents = attendPlans[0]
    ? attendPlans.filter(ev => ev.willAttend.includes(user))
    : '';

  //render items
  const renderItem = item => {
    const { name, startDate, image } = item;
    return item.isPrivate === true ? (
      <View style={styles.viewWrapper}>
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
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#900' }}>
                {name}
              </Text>
              <Text style={{ fontSize: 12 }}>{startDate?.split('T')[0]}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.confirmButtonWrap}
          onPress={() => {
            dispatch(addGuest(item.id));
            alert("Que lo disfrutes!");
            navigation.navigate('Fuiste invitado');
          }}>
          <Text style={styles.textButton}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    ) : null;
  };

  const renderConfirmItem = item => {
    const { name, startDate, image } = item;
    return item.isPrivate === true ? (
      <View style={styles.viewWrapper}>
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
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#900' }}>
                {name}
              </Text>
              <Text style={{ fontSize: 12 }}>{startDate?.split('T')[0]}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.itemTitle}>Que lo disfrutes!</Text>
      </View>
    ) : null;
  };

  return (
    <View style={styles.screenWrapper}>
      <ScrollView>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>Eventos Confirmados</Text>
          <FlatList
            data={confirmEvents}
            renderItem={({ item }) => renderConfirmItem(item)}
            style={styles.flatlist}
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          />
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>Invitaciones</Text>
          <FlatList
            data={attendPlans}
            renderItem={({ item }) => renderItem(item)}
            style={styles.flatlist}
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // pageWrapper: {
  //   marginBottom: 120,
  // },
  screenWrapper: {
    marginBottom: 80,
  },
  itemWrapper: {
    margin: 0,
    width: '100%',
  },
  itemTitle: {
    color: '#000000',
    marginTop: 40,
    marginBottom: -20,
    marginLeft: 18,
    fontSize: 22,
    padding: 1,
    fontWeight: 'bold',
  },
  viewWrapper: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    width: 300,
    height: 150,
    marginTop: 5,
    marginBottom: 5,
  },
  itemWrapper: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'transparent',
    flexDirection: 'row',
    width: 300,
    height: 80,
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
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 8,
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
  },
  confirmButtonWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    //marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 290,
    height: 50,
    backgroundColor: '#208383',
    //marginVertical: 10,
    //paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 6,
  },
  textButton: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  // flatlist: {
  //   justifyContent: 'center',
  // },
});

export default UserWillAttendPlans;
