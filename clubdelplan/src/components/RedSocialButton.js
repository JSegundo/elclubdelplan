import {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React from 'react';
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
      const userRedSocial = userInfo.user;
      navigation.navigate('Crea tu contraseña', {user: userRedSocial});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.error(err);
        return;
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.error(err);
        return;
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.error(err);
        return;
      } else {
        console.error(err);
        return;
      }
    }
  };

  return (
    <>
      <View>
        <GoogleSigninButton
          onPress={signIn}
          size={GoogleSigninButton.Size.Wide}
        />
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
