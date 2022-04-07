import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import LogInScreen from './LogInScreen';
import axios from 'axios';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';

const user_storage = '@userData';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState(null);
  const [tokenUser, setToken] = useState('token');
  const imgDefault =
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1';
  const [image, setImage] = useState(imgDefault);

  useEffect(() => {
    console.log('aca')
    async function getUser() {
      let responseUser = await AsyncStorage.getItem(user_storage);
      // let ImageUser = await AsyncStorage.getItem('@ImageUser')
      
      let infoUser = JSON.parse(responseUser);
      
      setUserInfo(infoUser);
      console.log(infoUser)
      console.log(userInfo)
    }
    getUser();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@Token');
      await AsyncStorage.removeItem('@userData');
      // await AsyncStorage.removeItem('@ImageUser');
      setToken(null);
      navigation.replace('MiddleApp')
    } catch (err) {
      console.log(err);
      return false;
    }
  };

<<<<<<< HEAD
  // const selectImage = () => {
  //   const options = {
  //     title: 'Selecciona una imagen',
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };

  //   launchImageLibrary (options, response => {
  //     if (response.errorCode) {
  //       console.error(response.errorMessage);
  //     } else if (response.didCancel) {
  //       console.log('El usuario canceló');
  //     } else {
  //       const selectedImage = response.assets[0].uri;
  //       setImage(selectedImage);
  //       // async function setearImagen (){

  //       // }
  //       // axios.put(`http://localhost:3001/api/users/img_data/${userInfo._id}` , image)
  //     }
  //   });
  // };


  return (
    <View style={styles.profileWrapper}>
    { userInfo?._id ? 
      <>
=======
  const selectImage = () => {
    const options = {
      title: 'Selecciona una imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.errorCode) {
        console.error(response.errorMessage);
      } else if (response.didCancel) {
        console.log('El usuario canceló');
      } else {
        const selectedImage = response.assets[0].uri;
        setImage(selectedImage);

        // axios.put(`http://localhost:3001/api/users/img_data/${userInfo._id}` , image)
      }
    });
  };

  console.log(userInfo);

  return userInfo?.email && tokenUser !== null ? (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 200,
      }}>
      {/* <ScrollView style={styles.profileWrapper}> */}
      {image === imgDefault ? (
>>>>>>> 945f6be74ea99040e3467b71f8197d9c5044fdd3
        <Image
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1',
          }}
          style={styles.imagen}
        />
      <View>
        <Button title={'Seleccionar foto de perfil'}  />
      </View>
      <Text style={{color: '#111', fontSize: 20, fontWeight: 'bold'}}>
        {userInfo.name}
      </Text>
      <Text style={{color: '#111'}}>{userInfo.email}</Text>

<<<<<<< HEAD
      
      <ScrollView style={styles.buttonsWrapper}>
=======
      {/* BOTONES PARA VER MIS PLANES  */}
      <View style={styles.buttonsWrapper}>
>>>>>>> 945f6be74ea99040e3467b71f8197d9c5044fdd3
        <TouchableOpacity
          style={styles.BtnNavigateToPlans}
          onPress={() => navigation.navigate('Tus planes')}>
          <View style={styles.textAndIconWrapper}>
            <Text style={{color: 'white', fontSize: 16}}>Mis planes</Text>
            <Ionicons name="arrow-forward" style={styles.IconBtnNav} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BtnNavigateToPlans}
          onPress={() => navigation.navigate('Editar preferencias')}>
          <View style={styles.textAndIconWrapper}>
            <Text style={{color: 'white', fontSize: 16}}>Editar tus preferencias</Text>
            <Ionicons name="arrow-forward" style={styles.IconBtnNav} />
          </View>
        </TouchableOpacity>
          
        <TouchableOpacity
          style={styles.BtnNavigateToPlans}
          onPress={() => navigation.navigate('Fuiste invitado')}>
          <View style={styles.textAndIconWrapper}>
            <Text style={{color: 'white', fontSize: 16}}>
              Planes que me invitaron
            </Text>
            <Ionicons name="arrow-forward" style={styles.IconBtnNav} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BtnNavigateToPlans}
          onPress={() => navigation.navigate('Historial')}>
          <View style={styles.textAndIconWrapper}>
            <Text style={{color: 'white', fontSize: 16}}>Historial</Text>
            <Ionicons name="arrow-forward" style={styles.IconBtnNav} />
          </View>
        </TouchableOpacity>
<<<<<<< HEAD
      </ScrollView>
   

      <TouchableOpacity onPress={logout} style={styles.logout}>
        <Text style={{color: 'white', fontSize: 16}}>Cerrar sesión</Text>
      </TouchableOpacity>  
      </>
      :
      null
      }
    </View>
  )
=======
      </View>
      {/* BOTONES PARA VER MIS PLANES  */}

      <TouchableOpacity onPress={logout} style={styles.logout}>
        <Text style={{color: 'white', fontSize: 16}}>Cerrar sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  ) : (
    <LogInScreen />
  );
>>>>>>> 945f6be74ea99040e3467b71f8197d9c5044fdd3
};

const styles = StyleSheet.create({
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 120,
  },
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  button: {
    marginRight: 8,
  },
  buttonsWrapper: {
    marginVertical: 10,
  },
  BtnNavigateToPlans: {
    backgroundColor: '#208383',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 8,
  },
  IconBtnNav: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
  textAndIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logout: {
    backgroundColor: '#B81414',
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 8,
    marginBottom: 100,
  },
});

export default UserProfileScreen;
