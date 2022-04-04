import {View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import CatalogScreen from '../screens/CatalogScreen';
import NewPlanScreen from '../screens/NewPlanScreen';
import LogInScreen from '../screens/LogInScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
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
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          // headerTransparent: true,
          headerShadowVisible: false,
          // headerTitleStyle: {color: '#900'},
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color="#900" />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={CatalogScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon: () => <Ionicons name="search" size={24} color="#900" />,
        }}
      />
      <Tab.Screen
        name="Crear plan"
        component={NewPlanScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon: () => <Ionicons name="add" size={30} color="#900" />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={LogInScreen}
        options={{

          headerShown: true,
          headerShadowVisible: false,

          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color="#900" />
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
