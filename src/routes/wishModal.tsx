import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import { globalStyles } from '../styles/global'

interface Wish {
  id:number;
  title: string;
  brand: string;
  price: string;
  description: string;
}

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
    <View style={globalStyles.container}>
      <Ionicons name='close' size={24} onPress={() => navigation.goBack()} />
      <Text>{item.title}</Text>
      <Text>`Price: ${item.price}
        Brand: ${item.brand}
        Product information: ${item.description}`
      </Text>
    </View>
  )
}

export default WishModalScreen
