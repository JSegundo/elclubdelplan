import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token_storage = '@Token';
const user_storage = '@userData';

const OwnPlans = () => {
  const [ownPlans, setOwnPlans] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUserAsyncStorage() {
      try {
        let responseUser = await AsyncStorage.getItem(user_storage);
        const usuario = JSON.parse(responseUser);
        setUser(usuario);

        console.log(usuario);
      } catch (err) {
        console.error(err);
      }
    }
    async function getOwnPlans() {
      let userid = user._id;
      try {
        let response = await axios.get(
          `http://localhost:3001/api/events/me/${userid}`,
        );
        setOwnPlans(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getOwnPlans();
    getUserAsyncStorage();
  }, []);

  // useEffect(() => {
  //   async function getOwnPlans() {
  //     try {
  //       let response = await axios.get(
  //         `http://localhost:3001/api/events/me/${user._id}`,
  //       );
  //       setOwnPlans(response.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   getOwnPlans();
  // }, [user]);

  const renderItem = item => {
    const {
      name,
      _id,
      category,
      date,
      time,
      image,
      location,
      isPrivate,
      totalPrice,
    } = item;

    console.log(isPrivate);

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
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#900'}}>
              {name}
            </Text>
            {/* <Text style={{color: 'black'}}>{category}</Text>
            <Text style={{fontSize: 10, color: 'black'}}>{location}</Text> */}
            <Text>{date?.startDate}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ) : null;
  };

  return (
    <View>
      <Text>OwnPlans</Text>
      <FlatList data={ownPlans} renderItem={({item}) => renderItem(item)} />
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

export default OwnPlans;
