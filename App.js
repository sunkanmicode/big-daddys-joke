import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GlobalProvider from "./src/context/Provider";
import AppNavigation from './src/navigations';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavigation />
    </GlobalProvider>
  );
}


