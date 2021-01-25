import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

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
    <View style={styles.container}>
      <Ionicons name='close' size={30} onPress={() => navigation.goBack()} />
      <Text style={styles.itemName}>{item.title}</Text>
      <Text style={styles.itemDetails}>Price: {item.price} {'\n'}
        Brand: {item.brand} {'\n'}
        Product information: {item.description}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    paddingTop: 45,
    paddingHorizontal:20,

  },
  itemName:{
    fontSize:24,
    marginBottom:10
  },
  itemDetails:{
    fontSize:18
  }

})
export default WishModalScreen
