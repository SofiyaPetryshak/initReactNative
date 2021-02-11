/* eslint-disable react-native/no-color-literals */
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { observer } from 'mobx-react'
import { Ionicons } from '@expo/vector-icons'


import { itemStore } from '$src/stores/index'
import { Item } from '$src/types/types'

const { width } = Dimensions.get('window')
const SCREEN_WIDTH = width

const PRODUCT_ITEM_HEIGHT = 290
const PRODUCT_ITEM_OFFSET = 5
const PRODUCT_ITEM_MARGIN = PRODUCT_ITEM_OFFSET * 2

interface ItemProps {
  item: Item
  onPress: (item:Item) => void
}

const CenterImageItem = ({ item, onPress }:ItemProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{uri:item.images[0]}}
        />
        <View style={styles.priceLikeRow}>
          <Text style={styles.priceText}>${item.price}</Text>
          <Ionicons
            name={item.liked ? 'heart' : 'heart-outline'}
            size={30}
            color='#EE4622'
            onPress={() => { itemStore.toggleLike(item.id) }}
          />
        </View>
        <Text numberOfLines={2} style={styles.titleText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default observer(CenterImageItem)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: PRODUCT_ITEM_HEIGHT,
    margin: PRODUCT_ITEM_OFFSET,
    overflow: 'hidden',
    width: (SCREEN_WIDTH - PRODUCT_ITEM_MARGIN) / 2 -
      PRODUCT_ITEM_MARGIN,
  },
  image: {
    height: 200,
    width: 200,
  },
  priceLikeRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 7,

  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText: {
    paddingHorizontal: 10,
    textAlign: 'center',
  },
})
