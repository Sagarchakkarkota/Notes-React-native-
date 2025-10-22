import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { colors } from '../../theme/colors';
import { widthScale } from '../../utils/scales.utility';

interface CustomButtonProps {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  type?: 'pressable' | 'touchableOpacity';
  loading?: boolean;
}
const CustomButton = ({
  style,
  text,
  onPress,
  textStyle,
  disabled = false,
  type = 'pressable',
  loading = false,
}: CustomButtonProps) => {
  const ButtonComponent =
    type === 'touchableOpacity' ? TouchableOpacity : Pressable;
  return (
    <ButtonComponent
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      {...(type === 'touchableOpacity' ? { activeOpacity: 0.7 } : {})}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors.background} />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      )}
    </ButtonComponent>
  );
};

export default CustomButton;

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: widthScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthScale(5),
  },
  buttonText: {
    color: colors.background,
    fontWeight: '600',
    fontSize: widthScale(14),
  },
  disabled: { opacity: 0.5 },
});
