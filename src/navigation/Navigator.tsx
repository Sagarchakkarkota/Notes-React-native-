import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddEditNoteScreen from '../screens/AddEditNoteScreen';
import HomeScreen from '../screens/HomeScreen';

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
