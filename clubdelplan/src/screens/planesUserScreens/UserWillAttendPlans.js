import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {userAttendPlans} from '../../store/user/userEvents';
import {useNavigation} from '@react-navigation/native';
import {addGuest} from '../../store/singleEvent';
import {userConfirmPlans} from '../../store/user/userConfirmEvents';

const UserWillAttendPlans = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const attendPlans = useSelector(store => store.userEvents);
  const confirmPlans = useSelector(store => store.confirmEvents);
  const [render, setRender] = useState(null);

  useEffect(() => {
    dispatch(userAttendPlans());
    dispatch(userConfirmPlans());
  }, [render]);

  // const handleSubmit = () => {

  // }

  //render items
  const renderItem = item => {
    const {name, startDate, image, eventOwner} = item;
    console.log(eventOwner);
    // return item.isPrivate === true ? (

    return (
      <View style={styles.viewWrapper}>
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
              <Text style={{fontSize: 12}}>Te invitó {eventOwner.name}</Text>
              <Text style={{fontSize: 12}}>{startDate?.split('T')[0]}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.confirmButtonWrap}
          onPress={() => {
            dispatch(addGuest(item._id)).then(() => setRender(!render));
          }}>
          <Text style={styles.textButton}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    );
    // ) : null;
  };

  const renderConfirmItem = item => {
    const {name, startDate, image} = item;

    return (
      <View style={styles.viewWrapper}>
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
        <Text style={styles.itemText}>Que lo disfrutes!</Text>
      </View>
    );
  };

  return (
    <View style={styles.screenWrapper}>
      <ScrollView>
        <View style={styles.planWrapper}>
          <Text style={styles.itemTitle}>Confirmados</Text>
          <FlatList
            data={confirmPlans}
            renderItem={({item}) => renderConfirmItem(item)}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
        <View style={styles.planWrapper}>
          <Text style={styles.itemTitle}>Invitaciones</Text>
          <FlatList
            data={attendPlans}
            renderItem={({item}) => renderItem(item)}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    marginBottom: 60,
  },
  planWrapper: {
    margin: 0,
    width: '100%',
  },
  itemTitle: {
    color: '#208383',
    marginTop: 40,
    marginLeft: 18,
    fontSize: 22,
    padding: 1,
    fontWeight: 'bold',
  },
  itemText: {
    color: '#208383',
    fontSize: 16,
    marginTop: 10,
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
    marginTop: 3,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 150,
    height: 50,
    backgroundColor: '#208383',
    borderRadius: 6,
  },
  textButton: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default UserWillAttendPlans;
