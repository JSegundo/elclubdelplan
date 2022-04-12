import {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton
} from '@react-native-google-signin/google-signin';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const RedSocialButton = () => {
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      androidClientId: process.env.API_GOOGLE,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const userRedSocial = userInfo.user
      console.log('USER_RED_SOCIAL_BUTTON --->>>', userRedSocial);
      navigation.navigate('Crea tu contraseña', {user : userRedSocial})
  
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

 
  return (
    <>
      <View>
        {/* <TouchableOpacity style={styles.buttonRedSocial} onPress={signIn}>
          <Ionicons name="logo-google" style={styles.logo}>
            <Text style={styles.textButton}>
               .  Registrarse con google
            </Text>
          </Ionicons>
        </TouchableOpacity> */}
        <GoogleSigninButton 
        onPress={signIn}
        size={GoogleSigninButton.Size.Wide}/>
      </View>
    </>
  );
};

export default RedSocialButton;

const styles = StyleSheet.create({
  buttonRedSocial: {
    width: 300,
    backgroundColor: '#1E90FF',
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 6,
  },
  logo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    paddingHorizontal: 20,
 },
  textButton: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
