import React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthScale } from '../../utils/scales.utility';
import { SafeAreaView } from 'react-native-safe-area-context';

const Wrapper = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) => {
  return (
    <SafeAreaView style={[wrapperStyles.mainContainer, style]}>
      {children}
    </SafeAreaView>
  );
};

export default Wrapper;

const wrapperStyles = StyleSheet.create({
  mainContainer: { flex: 1, padding: widthScale(20) },
});
