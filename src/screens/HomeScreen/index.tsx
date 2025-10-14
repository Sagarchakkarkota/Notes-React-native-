import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { homesScreenStyles } from './HomesScreen.styles';

const HomesScreen = ({ navigation }: any) => {
  // const navigation = useNavigation();
  return (
    <View style={homesScreenStyles.mainContainer}>
      <Pressable
        style={homesScreenStyles.addPressable}
        onPress={() => navigation.navigate('AddEditNote')}
      >
        <Text style={homesScreenStyles.addPressableText}>Add Note</Text>
      </Pressable>
    </View>
  );
};

export default HomesScreen;

const styles = StyleSheet.create({});
