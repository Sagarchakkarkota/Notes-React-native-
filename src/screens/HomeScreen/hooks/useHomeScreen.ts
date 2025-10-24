import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { IItemSchema } from '../../../globalTypes/globalTypes';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const useHomeScreen = ({ editId }: { editId?: number }) => {
  const [data, setData] = useState<IItemSchema[]>([]);
  const [filteredData, setFilteredData] = useState<IItemSchema[]>([]);
  const navigation = useNavigation<any>();
  const [isLoading, setLoading] = useState(false);
  const [isPending, setPending] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await AsyncStorage.getItem('data');
      const pasedData = res ? JSON.parse(res) : [];
      setData(pasedData);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const storeData = async (data: any) => {
    setPending(true);
    try {
      await AsyncStorage.setItem('data', JSON.stringify(data));
      setData(data);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (e) {
      // saving error
    } finally {
      setPending(false);
    }
  };

  const addEditHandler = (dataObj: IItemSchema) => {
    if (editId) {
      const editedData = data?.map((item: IItemSchema) => {
        return item.id === editId
          ? {
              ...item,
              title: dataObj?.title,
              description: dataObj?.description,
            }
          : item;
      });
      storeData(editedData);
      Toast.show({
        type: 'success',
        text1: 'Note updated successfully',
        position: 'top',
        visibilityTime: 2000,
      });
      return;
    }

    const newData = [...data, dataObj];
    storeData(newData);
    Toast.show({
      type: 'success',
      text1: 'Note added successfully',
      position: 'top',
      visibilityTime: 2000,
    });
    return;
  };
  const deleteHandler = (id: number) => {
    const filteredData = data?.filter((item: IItemSchema) => {
      return item?.id !== id;
    });
    Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          storeData(filteredData);
          Toast.show({
            type: 'success',
            text1: 'Note deleted successfully',
            position: 'top',
            visibilityTime: 2000,
          });
        },
      },
    ]);
  };

  return {
    states: {
      isLoading,
      isPending,
      data,
      setData,
      filteredData,
      setFilteredData,
    },
    functions: { addEditHandler, getData, deleteHandler },
  };
};

export default useHomeScreen;
