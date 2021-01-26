import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import { Wish } from '../types/types'

import Slider from '$src/components/slider'

type WishStackParamList = {
  Wish: { item: Wish }
};

type WishScreenNavigationProp = StackNavigationProp<WishStackParamList, 'Wish'>;
type WishScreenRouteProp = RouteProp<WishStackParamList, 'Wish'>;

type Props = {
  navigation: WishScreenNavigationProp;
  route: WishScreenRouteProp;
};

function WishModalScreen ({ route, navigation }:Props) {
  const { item } = route.params
  return (
    <View style={styles.container}>
      <Ionicons style={{ marginLeft: 20 }} name='close' size={30} onPress={() => navigation.goBack()} />
      <Slider images={item.images} />
      <Text style={styles.itemName}>{item.title}</Text>
      <Text style={styles.itemDetails}>Price: {item.price} {'\n'}
        Brand: {item.brand} {'\n'}
        Product information: {item.description}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,

  },
  itemDetails: {
    fontSize: 18,
  },
  itemName: {
    fontSize: 24,
    marginBottom: 10,
  },

})
export default WishModalScreen
