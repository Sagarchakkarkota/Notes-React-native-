import React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthScale } from '../../utils/scales.utility';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../Navbar/Navbar';

const Wrapper = ({
  children,
  style,
  childStyle,
  showSearch = true,
  handleSearchValue,
}: {
  children: React.ReactNode;
  style?: any;
  childStyle?: any;
  showSearch?: boolean;
  handleSearchValue?: (value: string) => void;
}) => {
  return (
    <SafeAreaView style={[wrapperStyles.mainContainer, style]}>
      <Navbar showSearch={showSearch} handleSearchValue={handleSearchValue} />
      <View style={[wrapperStyles.childContainer, childStyle]}>{children}</View>
    </SafeAreaView>
  );
};

export default Wrapper;

const wrapperStyles = StyleSheet.create({
  mainContainer: { flex: 1 },
  childContainer: { width: '100%', height: '100%', padding: widthScale(16) },
});
