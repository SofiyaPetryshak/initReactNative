/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { observer } from 'mobx-react'

import { itemStore } from '../stores/index'
import { globalStyles } from '../styles/global'
import { Item } from '../types/types'

import SideImageItem from '$src/components/sideImageItem'

type ItemsStackParamList = {
  Item: { item: Item }
};

type ItemsScreenNavigationProp = StackNavigationProp<ItemsStackParamList, 'Item'>;

type Props = {
  navigation: ItemsScreenNavigationProp;
}

const WishesScreen = ({ navigation }: Props) => {
  const [selectedId, setSelectedId] = useState(0)

  const onWishItemPress = (item: Item) => {
    setSelectedId(item.id)
    navigation.navigate('Item', {
      item: item,
    })
  }

  const renderItem = ({ item }:{item:Item}) => {
    return (
      <SideImageItem
        item={item}
        onPress={() => onWishItemPress(item)}
        rightActionText='Remove from wishes'
        onSwipeFromRight={() => itemStore.removeFromLiked(item.id)}
      />
    )
  }
  return (
    <View style={globalStyles.container}>

      <SafeAreaView>
        <FlatList
          data={itemStore.likedItems}
          renderItem={renderItem}
          keyExtractor={(item: Item) => `Wish-${item.id}`}
          extraData={selectedId}
        />
      </SafeAreaView>
    </View>
  )
}

export default observer(WishesScreen)
