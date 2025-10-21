import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CustomButton from '../../components/Buttons/CustomButton';
import Wrapper from '../../components/Wrappers/Wrapper';
import { widthScale } from '../../utils/scales.utility';
import Card from './components/Card';
import useHomeScreen from './hooks/useHomeScreen';
import { homeScreenStyles } from './HomesScreen.styles';

const HomesScreen = ({ navigation }: any) => {
  const {
    states: { data },
    functions: { getData, deleteHandler },
  } = useHomeScreen({});
  useEffect(() => {
    getData();
  }, []);
  return (
    <Wrapper>
      <CustomButton
        text="Add Note"
        onPress={() => navigation.navigate('AddEditNote')}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card item={item} deleteHandler={deleteHandler} />
        )}
        keyExtractor={item => String(item?.id)}
        contentContainerStyle={homeScreenStyles.contentContainerStyle}
      />
    </Wrapper>
  );
};

export default HomesScreen;

const styles = StyleSheet.create({});
