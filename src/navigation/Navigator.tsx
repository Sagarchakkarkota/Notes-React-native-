import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddEditNoteScreen from '../screens/AddEditNoteScreen/AddEditNoteScreen';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      //   screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddEditNote" component={AddEditNoteScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
