import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Navigator from './src/navigation/Navigator';
import { colors } from './src/theme/colors';

const App = () => {
  const mode = useColorScheme();
  const isDarkMode = mode === 'dark';
  return (
    <>
      <View
        style={{
          backgroundColor: isDarkMode ? colors.tertiary : colors.primary,
          height: StatusBar.currentHeight,
        }}
      />
      <StatusBar
        translucent
        barStyle={'light-content'}
        animated
        backgroundColor={'transparent'}
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
