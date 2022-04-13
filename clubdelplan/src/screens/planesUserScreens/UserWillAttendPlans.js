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

  console.log('ATTENDPLANS', attendPlans);
  console.log('CONFIRM PLANS', confirmPlans);

  // const handleSubmit = () => {

  // }

  //render items
  const renderItem = item => {
    const {name, startDate, image, eventOwner} = item;

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
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#B90303'}}>
                {name}
              </Text>
              <Text style={({fontSize: 12}, {color: 'black'})}>
                Creador: {eventOwner.name}
              </Text>
              <Text style={({fontSize: 12}, {color: 'black'})}>
                Fecha: {startDate?.split('T')[0]}
              </Text>
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
  };

  const renderConfirmItem = item => {
    const {name, startDate, image, eventOwner} = item;

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
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#B90303'}}>
                {name}
              </Text>
              <Text style={({fontSize: 12}, {color: 'black'})}>
                Creador: {eventOwner.name}
              </Text>
              <Text style={({fontSize: 12}, {color: 'black'})}>
                Fecha: {startDate?.split('T')[0]}
              </Text>
              <Text style={styles.asistiras}>Asistirás ✔️</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return confirmPlans[0] || attendPlans[0] ? (
    <View style={styles.pageWrapper}>
      <ScrollView>
        <Text style={styles.title}>Mis invitaciones</Text>
        {confirmPlans[0] ? (
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
        ) : null};
        
        {attendPlans[0] ? (
          <View style={styles.planWrapper}>
            <Text style={styles.itemTitle}>Sin confirmar</Text>
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
        ) : null};
      </ScrollView>
    </View>
  ) : (
    <View>
      <Text style={styles.title}>Mis invitaciones</Text>
      <Text style={styles.itemTitle}>Aún no tenés invitaciones</Text>
      <Text style={styles.emoji}>😪</Text>
    </View>
  );

  
};


const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 40,
    marginBottom: 0,
    fontSize: 30,
  },
  itemTitle: {
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
    marginLeft: 150,
  }
});

export default UserWillAttendPlans;
