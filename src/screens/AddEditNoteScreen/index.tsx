import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { addEditNoteScreenStyles } from './AddEditNoteScreen.styles';
import Wrapper from '../../components/Wrappers/Wrapper';
import CustomButton from '../../components/Buttons/CustomButton';
import useHomeScreen from '../HomeScreen/hooks/useHomeScreen';
import { IItemSchema } from '../../globalTypes/globalTypes';
import { colors } from '../../theme/colors';

const AddEditNoteScreen = ({ route }: { route: any }) => {
  const itemId = route?.params?.id;
  const mode = useColorScheme();
  const isDarkMode = mode === 'dark';
  const {
    states: { data },
    functions: { addEditHandler, getData },
  } = useHomeScreen({ editId: itemId });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const onSubmit = () => {
    addEditHandler({
      id: itemId || Date.now(),
      title,
      description,
    });
    setTitle('');
    setDescription('');
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data?.length) {
      const item = data.find((item: IItemSchema) => item.id === itemId);
      setTitle(String(item?.title || ''));
      setDescription(String(item?.description || ''));
    }
  }, [itemId, data.length]);
  const textColor = isDarkMode ? colors.background : colors.text;

  return (
    <Wrapper
      style={[
        addEditNoteScreenStyles.container,
        isDarkMode && { backgroundColor: colors.darkgray },
      ]}
    >
      <View>
        <Text style={[addEditNoteScreenStyles.label, { color: textColor }]}>
          Title
        </Text>
        <TextInput
          style={[[addEditNoteScreenStyles.input, { color: textColor }]]}
          onChangeText={setTitle}
          value={title}
          placeholder="Enter title"
          // placeholderTextColor={textColor}
        />
      </View>
      <View>
        <Text style={[addEditNoteScreenStyles.label, { color: textColor }]}>
          Description
        </Text>
        <TextInput
          style={[addEditNoteScreenStyles.input, { color: textColor }]}
          onChangeText={setDescription}
          value={description}
          placeholder="Enter description"
          // placeholderTextColor={textColor}
        />
      </View>
      <CustomButton
        text="Add Note"
        type="touchableOpacity"
        onPress={onSubmit}
      />
    </Wrapper>
  );
};

export default AddEditNoteScreen;
