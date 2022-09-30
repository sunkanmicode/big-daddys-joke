import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SearchScreen from '../screens/SearchScreen';
import colors from '../components/constant/colors'
import { SafeAreaView, StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();


const HomeNavigation = () => {

  return (
    // <StatusBar barStyle="dart-content" backgroundColor={colors.black}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    // </StatusBar>
  );
}

export default HomeNavigation
