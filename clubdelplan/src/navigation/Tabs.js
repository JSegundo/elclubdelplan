import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CatalogScreen from '../screens/CatalogScreen';
import NewPLanScreen from '../screens/NewPlanScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
            height: 60,
          },
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Text>Catalog</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="New Plan"
        component={NewPLanScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Text>New Plan</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Text>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 20,
    fontSize: 20,
  },
  tab: {
    marginTop: 20,
  },
});

export default Tabs;
