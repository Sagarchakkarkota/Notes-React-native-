import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CustomButton from '../../components/Buttons/CustomButton';
import Wrapper from '../../components/Wrappers/Wrapper';
import { colors } from '../../theme/colors';
import Card from './components/Card';
import { homeScreenStyles } from './HomesScreen.styles';
import useHomeScreen from './hooks/useHomeScreen';
import { widthScale } from '../../utils/scales.utility';

const HomesScreen = ({ navigation }: any) => {
  const {
    states: { data, isLoading, filteredData, setFilteredData },
    functions: { getData, deleteHandler },
  } = useHomeScreen({});
  useEffect(() => {
    getData();
  }, []);
  const mode = useColorScheme();
  const isDarkMode = mode === 'dark';
  const handleSearchValue = (value: string) => {
    const filteredData = data?.filter(item =>
      item.title.toLocaleLowerCase().includes(value.toLowerCase()),
    );
    setFilteredData(filteredData);
  };
  const notesData = filteredData?.length ? filteredData : data;
  return (
    <Wrapper
      handleSearchValue={handleSearchValue}
      childStyle={{
        backgroundColor: isDarkMode ? colors.darkgray : colors.background,
      }}
    >
      <CustomButton
        text="Add Note"
        onPress={() => navigation.navigate('AddEditNote')}
        style={{ width: '25%' }}
      />

      {isLoading ? (
        <View style={homeScreenStyles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.background} />
        </View>
      ) : (
        <FlatList
          data={notesData}
          renderItem={({ item }) => (
            <Card item={item} deleteHandler={deleteHandler} />
          )}
          keyExtractor={item => String(item?.id)}
          contentContainerStyle={homeScreenStyles.contentContainerStyle}
          ListEmptyComponent={
            <Text style={homeScreenStyles.emptyText}>No data found</Text>
          }
        />
      )}
    </Wrapper>
  );
};

export default HomesScreen;

const styles = StyleSheet.create({});
