import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import colors from '../components/constant/colors'


const Stack = createNativeStackNavigator();


const HomeNavigation = () => {

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
  );
}

export default HomeNavigation
