import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import Toast from 'react-native-toast-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const mode = useColorScheme();
  const isDarkMode = mode === 'dark';
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#fff'}
        translucent={false}
      />
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigator />
          <Toast />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
