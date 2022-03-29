import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/DetailsScreen.js';


const Stack = createNativeStackNavigator();


const customNavigation = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= "DetailsScreen" component={DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default customNavigation