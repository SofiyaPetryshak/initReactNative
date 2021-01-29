import { ImageSourcePropType } from 'react-native'

interface Item {
  id:number;
  title: string;
  brand: string;
  price: number;
  description: string;
  images: ImageSourcePropType[];
  liked: boolean;
  color: string;
}
export { Item }
