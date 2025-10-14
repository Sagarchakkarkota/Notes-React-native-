import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const baseWidth = 375;
const baseHeight = 812;
export const widthScale = (size: number) => (width / baseWidth) * size;
export const heightScale = (size: number) => (height / baseHeight) * size;
