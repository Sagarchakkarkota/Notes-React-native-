import { StyleSheet } from 'react-native';
import { widthScale } from '../../utils/scales.utility';
import { colors } from '../../theme/colors';
import { hexToRgba } from '../../utils/hexToRgba.utility';

export const cardStyles = StyleSheet.create({
  container: {
    width: '100%',
    padding: widthScale(8),
    borderWidth: widthScale(0.4),
    borderRadius: widthScale(5),
    backgroundColor: hexToRgba(colors.tertiary, 0.2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: { fontSize: widthScale(14), fontWeight: '600' },
  textDescription: { fontSize: widthScale(14), fontWeight: '400' },
  textContainer: { width: '75%' },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: widthScale(8),
  },
  buttonStyle: {
    borderWidth: widthScale(0.5),
    borderRadius: widthScale(5),
    padding: widthScale(4),
  },
});

export const homeScreenStyles = StyleSheet.create({
  contentContainerStyle: { padding: widthScale(12), gap: widthScale(8) },
});
