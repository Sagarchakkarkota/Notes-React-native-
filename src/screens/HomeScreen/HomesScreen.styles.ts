import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { hexToRgba } from '../../utils/hexToRgba.utility';
import { widthScale } from '../../utils/scales.utility';

export const homesScreenStyles = StyleSheet.create({
  mainContainer: { flex: 1, padding: widthScale(20) },
  addPressable: {
    backgroundColor: colors.primary,
    width: '100%',
    paddingVertical: widthScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthScale(5),
  },
  addPressableText: { color: colors.background },
});
