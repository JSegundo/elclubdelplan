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
import {getOwnerPastEvents} from '../store/user/ownerPastEvents';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {addGuest} from '../../store/singleEvent';


const CardEvent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  const ownerPastEvents = useSelector(store => store.ownerPastEvents);
  const user = useSelector(state => state.user);

  const {item} = route.params;
  const {
    time,
    image,
    category,
    name,
    location,
    startDate,
    endDate,
    paymentLimitDate,
    description,
    pricePerPerson,
    coments,
    isPrivate,
    eventOwner,
  } = item;
  useEffect(() => {
    if (!eventOwner._id) return;
    dispatch(getOwnerPastEvents(eventOwner._id));
  }, []);
  console.log('event Onwer', eventOwner);

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
  const verifyUser = () => {
    async function getToken() {
      try {
        const tokenAsync = await AsyncStorage.getItem('@Token');
        console.log('TOKEN EN NEW', tokenAsync);
        let tokenParsed = JSON.parse(tokenAsync);
        setToken(tokenParsed);
        if (!tokenAsync) navigation.replace('MiddleScreen');
        else {
          navigation.navigate('Comentarios', {id: item._id});
        }
      } catch (err) {
        console.log(err);
      }
    }
    getToken();
  };
  const renderItem = item => {
    const {
      name,
      category,
      startDate,
      image,
      location,
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
          <Text style={{paddingBottom: 10}}>{category}</Text>
          {isPrivate ? (
            <Ionicons
              name="lock-closed-outline"
              style={{
                color: '#900',
                fontSize: 30,
              }}
            />
          ) : (
            <Ionicons
              name="lock-open-outline"
              style={{
                color: '#208383',
                fontSize: 30,
              }}
            />
          )}
          {/* SECCION DE FECHAS  */}
          <View style={styles.sectionWrapper}>
            <View style={styles.sectionIconWrapper}>
              <Ionicons
                name="calendar"
                style={{
                  color: '#208383',
                  fontSize: 20,
                }}
              />
            </View>
            <View style={styles.sectionInfoWrapper}>
              <Text>Fecha y hora</Text>
              <Text style={styles.text}>
                Empieza: {startDate?.split('T')[0]}
              </Text>
              <Text style={styles.text}>Termina: {endDate?.split('T')[0]}</Text>
              {paymentLimitDate ? (
                <Text style={styles.text}>
                  Limite de confirmación: {paymentLimitDate?.split('T')[0]}
                </Text>
              ) : null}
              <Text style={styles.text}>Hora de inicio: {time} hs</Text>
            </View>
          </View>
          {/* SECCION DE FECHAS  */}

          {/* DESCRIPTION  */}
          <View style={styles.sectionWrapper}>
            <View style={styles.sectionIconWrapper}>
              <Ionicons
                name="book"
                style={{
                  color: '#208383',
                  fontSize: 20,
                }}
              />
            </View>
            <View style={styles.sectionInfoWrapper}>
              <Text>Descripción</Text>
              <Text style={styles.text}>{description}</Text>
            </View>
          </View>

          {/* SECCION DE UBICACIÓN */}
          <View style={styles.sectionWrapper}>
            <View style={styles.sectionIconWrapper}>
              <Ionicons
                name="pin"
                style={{
                  color: '#208383',
                  fontSize: 20,
                }}
              />
            </View>
            <View style={styles.sectionInfoWrapper}>
              <Text>Ubicación</Text>
              <Text style={styles.text}>{location}</Text>
            </View>
          </View>

          <Text style={styles.text}>
            Precio: ARS ${pricePerPerson ? pricePerPerson : 0}
          </Text>

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
            <View>
              <TouchableOpacity
                style={styles.confirmButtonWrap}
                onPress={() => {
                  dispatch(addGuest(item._id));
                }}>
                <Text style={styles.textButton}>ASISTIR</Text> 
              </TouchableOpacity>

              <ButtonShare item={item} />
            </View>
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

          {ownerPastEvents[0] ? (
            <View>
              <Text style={styles.subtitle}>
                Eventos también creados por {eventOwner.name}
              </Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={ownerPastEvents}
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
    width: 250,
    height: 250,
    borderRadius: 10,
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

  // SECCIONES DE INFORMACIÓN

  sectionWrapper: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#900',
    borderBottomColor: 'grey',
  },
  sectionIconWrapper: {
    width: '20%',
  },
  sectionInfoWrapper: {
    width: '80%',
  },

  // planes del owner del plan

  itemWrapper: {
    width: 203,
    height: 250,
    marginHorizontal: 10,
    marginVertical: 20,
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
