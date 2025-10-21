type RootStackParamList = {
  Home: undefined;
  AddEditNote: undefined;
};

interface IItemSchema {
  id: number;
  title: string;
  description: string;
}

export type { RootStackParamList, IItemSchema };
