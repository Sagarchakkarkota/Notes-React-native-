import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { widthScale } from '../../utils/scales.utility';
import { colors } from '../../theme/colors';

interface NavbarProps {
  showSearch?: boolean;
  handleSearchValue?: (value: string) => void;
}

const Navbar = ({ showSearch = true, handleSearchValue }: NavbarProps) => {
  const mode = useColorScheme();
  const isDarkMode = mode === 'dark';

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? colors.tertiary : colors.primary },
      ]}
    >
      <Image
        source={require('../../assets/notes.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {showSearch && (
        <TextInput
          onChangeText={value => handleSearchValue?.(value)}
          placeholder="Search..."
          placeholderTextColor={colors.text}
          style={styles.searchInput}
        />
      )}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthScale(12),
    paddingVertical: widthScale(8),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.background,
    gap: widthScale(12),
  },
  logo: {
    width: widthScale(40),
    height: widthScale(40),
  },
  searchInput: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: widthScale(10),
    borderRadius: widthScale(5),
    height: widthScale(36),
    color: colors.text,
  },
});
