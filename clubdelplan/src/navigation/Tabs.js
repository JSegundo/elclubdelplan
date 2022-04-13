import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import CatalogScreen from '../screens/CatalogScreen';
import NewPlanScreen from '../screens/NewPlanScreen';
import middleScreen from '../screens/MiddleScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [token , setToken] = useState(null)
  const [iconUserColor , setIconUser] = useState('#777')
  const user = useSelector(state => state.user);
  

  useEffect(()=> {
    async function getToken () {
      const tokenAsync = await AsyncStorage.getItem('@Token')
      let tokenParsed = JSON.parse(tokenAsync)
      setToken(tokenParsed)
      if(tokenAsync) setIconUser('#900')

    }
    getToken()
  }, [])
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          marginTop: 100,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 60,
          ...styles.shadow,
        },
        tabBarOptions: {
          activeTintColor: '#900',
          inactiveTintColor: 'grey'
        },
      }}>
      <Tab.Screen
        name={`Hola, ${user.name}`}
        component={HomeScreen}
        options={{
          headerShown: true,
          // headerTransparent: true,
          headerShadowVisible: false,
          // headerTitleStyle: {color: '#900'},
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={CatalogScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon: ({color}) => <Ionicons name="search" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Crear plan"
        component={NewPlanScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon: ({color}) => <Ionicons name="add" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={middleScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert('This is a button!')}
          //     title="Info"
          //     color="#111"
          //   />),
          tabBarIcon: ({color}) => (
<<<<<<< HEAD
            <Ionicons name="person-outline" size={22} color={color} />
=======
            <Ionicons name='person-outline' size={22} color={iconUserColor} />
>>>>>>> estrellita
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
