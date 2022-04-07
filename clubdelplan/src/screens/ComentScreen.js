import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {createComent} from '../store/coment';
import {getEvent} from '../store/singleEvent';
import emptyStar from '../assets/star_corner.png';
import fullStar from '../assets/star_filled.png';

const token_storage = '@Token';
const user_storage = '@userData';

const Coment = () => {
  const [coment, onChangeText] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const route = useRoute();
  let dispatch = useDispatch();

  const {id} = route.params;
  console.log('ID->', id);
  useEffect(() => {
    dispatch(getEvent(id));
    async function getTokenAndUser() {
      try {
        let responseToken = await AsyncStorage.getItem(token_storage);
        let responseUser = await AsyncStorage.getItem(user_storage);
        setToken(JSON.parse(responseToken));
        setUser(JSON.parse(responseUser));
      } catch ({err}) {
        console.error({err});
      }
    }
    getTokenAndUser();
  }, []);

  const onSubmit = () => {
    try {
      dispatch(
        createComent({
          userName: user.name,
          coment,
          vote: defaultRating,
        }),
      );
    } catch (e) {
      console.error(e);
    }
  };

  const Rating = () => {
    return (
      <View style={styles.ratingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImgStyle}
                source={item <= defaultRating ? fullStar : emptyStar}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.view}>
        <Text style={styles.comentTitle}>Comentario</Text>
        <TextInput
          multiline={true}
          style={styles.comentInput}
          onChangeText={onChangeText}
          placeholder="coment"
          placeholderTextColor="#808080"
          value={coment}
        />
        <Text style={styles.comentTitle}>Valoracion</Text>
        <Rating />
        <TouchableOpacity style={styles.buttonComent} onPress={onSubmit}>
          <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
            Comentar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  comentTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#208383',
    marginTop: 10,
    marginBottom: 0,
    // marginLeft: 18,
    fontSize: 20,
    padding: 1,
  },
  tittlePrincipal: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#111',
    marginTop: 10,
    marginBottom: 0,
    width: 300,
    fontSize: 24,
    padding: 10,
  },
  comentInput: {
    width: 300,
    height: 150,
    margin: 10,
    borderWidth: 4,
    padding: 10,
    borderRadius: 10,
    borderColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 26,
  },
  comentInputVote: {
    textAlign: 'center',
    width: 100,
    height: 50,
    margin: 10,
    borderWidth: 4,
    padding: 10,
    borderRadius: 10,
    borderColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 26,
  },
  buttonComent: {
    width: 300,
    backgroundColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 6,
  },
  ratingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
};
export default Coment;
