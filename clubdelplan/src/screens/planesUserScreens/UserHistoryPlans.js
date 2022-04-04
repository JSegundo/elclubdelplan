import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {Children, useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token_storage = '@Token';
const user_storage = '@userData';

const UserHistoryPlans = () => {
  const [ownPlans, setOwnPlans] = useState(null);
  const [user, setUser] = useState(null);
  const [token,setToken] = useState(null)

  // GET user and token
  useEffect(() => {
    async function getUserAsyncStorage() {
      try {
        let responseUser = await AsyncStorage.getItem(user_storage);
        let responseToken = await AsyncStorage.getItem(token_storage);
        const usuario = JSON.parse(responseUser);
        const tokenUser = JSON.parse(responseToken);
        setUser(usuario);
        setToken(tokenUser);
      } catch (err) {
        console.error(err);
      }
    }
    getUserAsyncStorage();
  }, []);

  // SET headers for JWT check
 const authAxios = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  // GET events for showing
  useEffect(() => {
    let userid = user?._id;
    async function getOwnPlans() {
      try {
        if (user !== null) {
          let response = await authAxios.get(
            `/api/events/done/${userid}`,
          );
          setOwnPlans(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    getOwnPlans();
  }, [user,token]);

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

            <Text style={{fontSize: 12}}>{startDate.split('T')[0]}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ) : null;
  };

  return (
    <View>
      {/* <Text>Historial de planes</Text> */}
      <FlatList
        data={ownPlans}
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
