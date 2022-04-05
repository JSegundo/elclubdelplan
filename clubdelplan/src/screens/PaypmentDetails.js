import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {useRoute, useNavigation} from '@react-navigation/native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  const PaymentDetails = () => {
    //const navigation = useNavigation();
    const route = useRoute();
  
    const {item} = route.params;
    const {time, image, name, location, startDate, totalPrice} = item;
  
    return (
      <View style={styles.cardWrap}>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.title}>{name}</Text>
        <Ionicons name="house-outline" size={18} color="#900" style={styles.text}>
          <Text style={styles.text}>{location}</Text>
        </Ionicons>
        <Ionicons name="phone" size={18} color="#900" style={styles.text}>
          <Text style={styles.text}>{startDate}</Text>
        </Ionicons>
        <Ionicons name="phone" size={18} color="#900" style={styles.text}>
          <Text style={styles.text}>{time}</Text>
        </Ionicons>
        <Ionicons name="phone" size={18} color="#900" style={styles.text}>
          <Text> ARS {totalPrice}</Text>
        </Ionicons>
        
      </View>    
    );
  };
  
  const styles = StyleSheet.create({
    title: {
      marginTop: 10,
      fontSize: 35,
      fontWeight: 'bold',
      color: 'black',
    },
    cardWrap: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      color: 'black',
      margin: 4,
    },
    image: {
      marginTop: 30,
      width: 250,
      height: 360,
      borderRadius: 20,
    },
    buttonWrap: {
      marginTop: 10,
      alignItems: 'center',
      backgroundColor: '#900',
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 9,
      width: 300,
  
    },
    button: {
      color: 'white',
      fontSize: 18,
    },
  });
  
  export default PaymentDetails; 
  