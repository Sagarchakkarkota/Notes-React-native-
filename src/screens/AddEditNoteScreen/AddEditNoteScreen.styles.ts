import { StyleSheet } from 'react-native';
import { widthScale } from '../../utils/scales.utility';
import { colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';

export const addEditNoteScreenStyles = StyleSheet.create({
  container: { gap: widthScale(8) },
  label: { color: colors.text, fontSize: Typography.medium, fontWeight: '600' },
  input: {
    paddingVertical: widthScale(10),
    paddingHorizontal: widthScale(16),
    borderWidth: widthScale(1),
    borderColor: colors.gray,
    borderRadius: widthScale(5),
  },
});
