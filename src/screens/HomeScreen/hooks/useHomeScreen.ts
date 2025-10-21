import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { IItemSchema } from '../../../globalTypes/globalTypes';
import { useNavigation } from '@react-navigation/native';

const useHomeScreen = ({ editId }: { editId?: number }) => {
  const [data, setData] = useState<IItemSchema[]>([]);
  const navigation = useNavigation<any>();
  const getData = async () => {
    try {
      const res = await AsyncStorage.getItem('data');
      const pasedData = res ? JSON.parse(res) : [];
      setData(pasedData);
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (data: any) => {
    try {
      await AsyncStorage.setItem('data', JSON.stringify(data));
      getData();
      setData(data);
      navigation.navigate('Home');
    } catch (e) {
      // saving error
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
    storeData(filteredData);
    Toast.show({
      type: 'success',
      text1: 'Note deleted successfully',
      position: 'top',
      visibilityTime: 2000,
    });
  };
  return {
    states: {
      data,
    },
    functions: { addEditHandler, getData, deleteHandler },
  };
};

export default useHomeScreen;
