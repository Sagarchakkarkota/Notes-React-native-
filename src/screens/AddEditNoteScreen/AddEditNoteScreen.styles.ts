import { StyleSheet } from 'react-native';
import { widthScale } from '../../utils/scales.utility';
import { colors } from '../../theme/colors';

export const addEditNoteScreenStyles = StyleSheet.create({
  container: { gap: widthScale(8) },
  label: { color: colors.text, fontSize: widthScale(14), fontWeight: '600' },
  input: {
    height: widthScale(40),
    borderWidth: widthScale(1),
    borderColor: colors.gray,
    borderRadius: widthScale(5),
  },
});
