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
import Toast from 'react-native-toast-message';
import { widthScale } from '../../utils/scales.utility';

const AddEditNoteScreen = ({ route }: { route: any }) => {
  const itemId = route?.params?.id;
  const mode = useColorScheme();
  const isDarkMode = mode === 'dark';
  const {
    states: { data, isPending },
    functions: { addEditHandler, getData },
  } = useHomeScreen({ editId: itemId });
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);

  const onSubmit = () => {
    if (!title) {
      setTitleError(true);
    }
    if (!description) {
      setDescriptionError(true);
    }
    if (title && description) {
      addEditHandler({
        id: itemId || Date.now(),
        title,
        description,
      });
      setTitle('');
      setDescription('');
    }
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
  }, [itemId, data]);
  const textColor = isDarkMode ? colors.background : colors.text;

  return (
    <Wrapper
      childStyle={[
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
          onChangeText={value => {
            if (value) {
              setTitleError(false);
            }
            setTitle(value);
          }}
          value={title}
          placeholder="Enter title"
          // placeholderTextColor={textColor}
        />
        {titleError && (
          <Text style={{ color: colors.error, marginTop: widthScale(4) }}>
            title field is required
          </Text>
        )}
      </View>
      <View>
        <Text style={[addEditNoteScreenStyles.label, { color: textColor }]}>
          Description
        </Text>
        <TextInput
          multiline
          numberOfLines={8}
          style={[addEditNoteScreenStyles.input, { color: textColor }]}
          onChangeText={value => {
            if (value) {
              setDescriptionError(false);
            }
            setDescription(value);
          }}
          value={description}
          placeholder="Enter description"
          // placeholderTextColor={textColor}
        />
        {descriptionError && (
          <Text style={{ color: colors.error, marginTop: widthScale(4) }}>
            Description field is required
          </Text>
        )}
      </View>
      <CustomButton
        text="Add Note"
        type="touchableOpacity"
        onPress={onSubmit}
        loading={isPending}
      />
    </Wrapper>
  );
};

export default AddEditNoteScreen;
