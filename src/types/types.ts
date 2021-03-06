import { ImageSourcePropType } from 'react-native'

interface Item {
  id:number;
  title: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  liked: boolean;
  color: string;
  quantity:number;
}
export { Item }
