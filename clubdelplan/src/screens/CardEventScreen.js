import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonShare from '../components/ButtonShare';
import emptyStar from '../assets/star_corner.png';
import fullStar from '../assets/star_filled.png';
import {useSelector, useDispatch} from 'react-redux';
import {userDonePlans} from '../store/user/userEvents';

const CardEvent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const dispatch = useDispatch();
  const donePlans = useSelector(store => store.userEvents);
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(userDonePlans());
  }, []);

  const {item} = route.params;
  const {
    time,
    image,
    name,
    location,
    startDate,
    endDate,
    paymentLimitDate,
    description,
    pricePerPerson,
    coments,
  } = item;
  const fakeMapImage =
    'https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=38.11779&lon=13.35869&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*';
  const dateNow = new Date();
  const eventDate = new Date(endDate);

  const Rating = ({vote}) => {
    return (
      <View style={styles.ratingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <View>
              <Image
                style={styles.starImgStyle}
                source={item <= vote ? fullStar : emptyStar}
              />
            </View>
          );
        })}
      </View>
    );
  };

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

    return (
      <View style={styles.itemWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Plan', {item: item});
          }}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.imageFlatlist}
          />
          <View style={{padding: 4}}>
            <Text style={styles.nombreEvento}>{name}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textFlatlist}>{category}</Text>
              <Text style={styles.startDate}>{startDate.split('T')[0]}</Text>
            </View>
            <Text style={styles.textFlatlist}>{location}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderComment = item => {
    const {userName, coment, vote} = item;
    return (
      <View style={styles.reviewWrapper}>
        <View style={{padding: 4}}>
          <Rating vote={vote} />
          <Text style={styles.nombreUsuario}>{userName}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textComent}>{coment}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.cardWrap}>
          <View style={styles.ImageWrapper}>
            <Image style={styles.image} source={{uri: image}} />
          </View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}> Empieza: {startDate?.split('T')[0]}</Text>
          <Text style={styles.text}>Termina: {endDate?.split('T')[0]}</Text>
          {paymentLimitDate ? (
            <Text style={styles.text}>
              Limite de confirmación: {paymentLimitDate?.split('T')[0]}
            </Text>
          ) : null}
          {/* DATES */}
          <Text>{user.name}</Text>
          {/* <Ionicons name="phone" size={18} color="#900" style={styles.text} /> */}
          <Text style={styles.text}>Hora de inicio: {time} hs</Text>
          {/* <Ionicons name="phone" size={18} color="#900" style={styles.text} /> */}
          <Text style={styles.text}>
            Precio: ARS ${pricePerPerson ? pricePerPerson : 0}
          </Text>
          <View>
            <Text style={styles.subtitle}>Descripción</Text>
            <Text style={styles.text}>{description}</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Ubicación</Text>
            <Text style={styles.text}>
              <Ionicons
                name="pin"
                style={{
                  color: '#208383',
                  fontSize: 20,
                }}
              />
              {location}
            </Text>
            <Image style={styles.mapImage} source={{uri: fakeMapImage}} />
          </View>
          {/* CARROUSEL */}

          {eventDate.getTime() < dateNow.getTime() ? (
            <View style={styles.comentWrapper}>
              <Text style={styles.subtitle}>Reseñas de usuarios</Text>
              <FlatList
                contentContainerStyle={{paddingTop: 40}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={coments}
                renderItem={({item}) => renderComment(item)}
              />
            </View>
          ) : (
            <ButtonShare item={item} />
          )}
          {user?._id && eventDate.getTime() < dateNow.getTime() ? (
            <TouchableOpacity
              style={styles.buttonWrap}
              onPress={() =>
                navigation.navigate('Comentarios', {id: item._id})
              }>
              <Text style={styles.button}>Dejá tu reseña</Text>
            </TouchableOpacity>
          ) : null}

          {donePlans[0] ? (
            <View>
              <Text style={styles.subtitle}>Eventos del mismo creador</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={donePlans}
                renderItem={({item}) => renderItem(item)}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#900',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    paddingLeft: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  cardWrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    margin: 4,
  },
  ImageWrapper: {
    marginTop: 20,
    width: '100%',
    height: 200,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    borderRadius: 4,
  },
  mapImage: {
    marginTop: 30,
    width: 380,
    height: 250,
    borderRadius: 20,
  },
  buttonWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#900',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 9,
    width: 300,
  },
  line: {
    color: 'grey',
  },
  button: {
    color: 'white',
    fontSize: 18,
  },
  comentWrapper: {
    margin: 0,
    width: '100%',
    marginTop: 20,
  },
  reviewWrapper: {
    width: 203,
    height: 250,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  nombreUsuario: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 5,
    marginLeft: 5,
  },
  textComent: {
    color: '#000000',
    margin: 1,
    marginLeft: 5,
  },
  starImgStyle: {
    marginTop: -10,
    marginRight: 12,
    width: 18,
    height: 18,
    resizeMode: 'cover',
  },
  ratingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },

  // planes del owner del plan

  itemWrapper: {
    width: 203,
    height: 250,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },

  textFlatlist: {
    color: '#000000',
    fontWeight: 'bold',
    margin: 1,
    marginLeft: 5,
  },
  nombreEvento: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#B90303',
    marginTop: 5,
    marginLeft: 5,
  },
  imageFlatlist: {
    width: 200,
    height: '58%',
    borderRadius: 16,
  },
});

export default CardEvent;
