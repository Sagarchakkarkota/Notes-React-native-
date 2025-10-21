import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addEditNoteScreenStyles } from './AddEditNoteScreen.styles';
import Wrapper from '../../components/Wrappers/Wrapper';
import CustomButton from '../../components/Buttons/CustomButton';
import useHomeScreen from '../HomeScreen/hooks/useHomeScreen';
import { IItemSchema } from '../../globalTypes/globalTypes';

const AddEditNoteScreen = ({ route }: { route: any }) => {
  const itemId = route?.params?.id;

  const {
    states: { data },
    functions: { addEditHandler, getData },
  } = useHomeScreen({ editId: itemId });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const onSubmit = () => {
    addEditHandler({
      id: Date.now(),
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
    if (data.length) {
      const item = data.find((item: IItemSchema) => item.id === itemId);
      setTitle(String(item?.title || ''));
      setDescription(String(item?.description || ''));
    }
  }, [itemId, data.length]);

  return (
    <Wrapper style={addEditNoteScreenStyles.container}>
      <View>
        <Text style={addEditNoteScreenStyles.label}>Title</Text>
        <TextInput
          style={addEditNoteScreenStyles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Enter title"
        />
      </View>
      <View>
        <Text style={addEditNoteScreenStyles.label}>Description</Text>
        <TextInput
          style={addEditNoteScreenStyles.input}
          onChangeText={setDescription}
          value={description}
          placeholder="Enter description"
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
