/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { globalStyles } from '../styles/global'
import { WISHES } from '../wishes'

interface Wish {
  id:number;
  title: string;
  brand: string;
  price: string;
  description: string;
}

interface WishItemProps {
  item: Wish;
  onPress: (item:Wish) => void;
  style: StyleProp<ViewStyle>;
}

const WishItem = ({ item, onPress, style }:WishItemProps) => (
  <TouchableOpacity onPress={() => onPress(item)} style={style}>
    <Text style={styles.listItemText}>{item.title}</Text>
  </TouchableOpacity>
)

type WishesStackParamList = {
  Wish: { item: Wish }
};

type WishesScreenNavigationProp = StackNavigationProp<WishesStackParamList, 'Wish'>;

type Props = {
  navigation: WishesScreenNavigationProp;
}

const WishesScreen = ({ navigation }: Props) => {
  const [selectedId, setSelectedId] = useState(0)

  const onWishItemPress = (item: Wish) => {
    setSelectedId(item.id)
    navigation.navigate('Wish', {
      item: item,
    })
  }

  const renderItem = ({ item }:{item:Wish}) => {
    const wishItemStyle = {
      backgroundColor: item.id === selectedId ? '#AFBDEC' : '#C3CEF1',
      marginBottom: 10,
    }

    return (
      <WishItem
        item={item}
        onPress={() => onWishItemPress(item)}
        style={{
          backgroundColor: wishItemStyle.backgroundColor,
          marginBottom: wishItemStyle.marginBottom,
        }}
      />
    )
  }
  return (
    <View style={globalStyles.container}>

      <SafeAreaView>
        <FlatList
          data={WISHES}
          renderItem={renderItem}
          keyExtractor={(item: Wish) => `Wish-${item.id}`}
          extraData={selectedId}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  listItemText: {
    alignSelf: 'stretch',
    fontSize: 18,
    padding: 15,
  },
})

export default WishesScreen
