import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {Children, useEffect, useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {userDonePlans} from '../../store/user/userEvents';
import {useNavigation} from '@react-navigation/native';

const UserHistoryPlans = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const donePlans = useSelector(store => store.userEvents);

  // GET user and token
  useEffect(() => {
    dispatch(userDonePlans());
  }, []);

  // render items
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
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#900'}}>
              {name}
            </Text>

            <Text style={{fontSize: 12}}>{startDate?.split('T')[0]}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ) : null;
  };

  return (
    <View>
      {/* <Text>Historial de planes</Text> */}
      <Text
        style={{
          textAlign: 'center',
          padding: 10,
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        Planes realizados
      </Text>
      <FlatList
        data={donePlans}
        renderItem={({item}) => renderItem(item)}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      />
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
    width: 160,
    justifyContent: 'space-between',
    padding: 8,
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
});

export default UserHistoryPlans;
