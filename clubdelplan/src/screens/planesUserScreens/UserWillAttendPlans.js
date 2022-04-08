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
import { userAttendPlans } from '../../store/userEvents';
import { useNavigation } from '@react-navigation/native';

const UserWillAttendPlans = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const attendPlans = useSelector(store => store.userEvents);

  useEffect(() => {
    dispatch(userAttendPlans());
  }, []);

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
    } = item;

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
          onPress={() => { alert("Que lo disfrutes!") }}>
          <Text style={styles.textButton}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    ) : null;
  };

  return (
    <View>
      <FlatList
        data={attendPlans}
        renderItem={({ item }) => renderItem(item)}
        style={styles.flatlist}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // pageWrapper: {
  //   marginBottom: 120,
  // },
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