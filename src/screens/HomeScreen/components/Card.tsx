import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { IItemSchema } from '../../../globalTypes/globalTypes';
import { colors } from '../../../theme/colors';
import { cardStyles } from '../HomesScreen.styles';

const Card = ({
  item,
  deleteHandler,
}: {
  item: IItemSchema;
  deleteHandler: (id: number) => void;
}) => {
  const navigation = useNavigation<any>();
  const mode = useColorScheme();
  const isDarkMode = mode === 'dark';
  return (
    <View
      style={[
        cardStyles.container,
        isDarkMode && { backgroundColor: colors.tertiary },
      ]}
    >
      <View style={cardStyles.textContainer}>
        <Text style={cardStyles.textTitle}>{item.title}</Text>
        <Text style={cardStyles.textDescription}>{item.description}</Text>
      </View>

      <View style={cardStyles.iconsContainer}>
        <Pressable
          style={cardStyles.buttonStyle}
          onPress={() => navigation.navigate('AddEditNote', { id: item.id })}
        >
          <MaterialIcons name="edit-note" size={20} />
        </Pressable>
        <Pressable
          style={cardStyles.buttonStyle}
          onPress={() => deleteHandler(item.id)}
        >
          <MaterialIcons name="delete-outline" color={colors.error} size={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
