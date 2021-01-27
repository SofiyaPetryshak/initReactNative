import { ImageSourcePropType } from 'react-native'

interface Wish {
  id:number;
  title: string;
  brand: string;
  price: string;
  description: string;
  images: ImageSourcePropType[];
  // liked: boolean;
  color: string;
}
export { Wish }
