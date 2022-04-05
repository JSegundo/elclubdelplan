import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {userOwnPlans} from '../../store/userEvents';

const OwnPlans = () => {
  const dispatch = useDispatch();
  const ownPlans = useSelector(store => store.userEvents);

  useEffect(() => {
    dispatch(userOwnPlans());
  }, []);

  //render items
  const renderItem = item => {
    const {name, startDate, image} = item;

    return item.isPrivate === true ? (
      <TouchableOpacity>
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
      <FlatList
        data={ownPlans}
        renderItem={({item}) => renderItem(item)}
        style={styles.flatlist}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // pageWrapper: {
  //   marginBottom: 120,
  // },
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
  // flatlist: {
  //   justifyContent: 'center',
  // },
});

export default OwnPlans;
