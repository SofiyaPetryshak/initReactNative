import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'

import CenterImageItem from '../components/centerImageItem'
import { itemStore } from '../stores/index'

import { Item } from '$src/types/types'

const PRODUCT_ITEM_OFFSET = 5

export default function HomeScreen ({ navigation }: { navigation: any }) {
  const [selectedId, setSelectedId] = useState(0)

  const onItemPress = (item: Item) => {
    setSelectedId(item.id)
    navigation.navigate('Item', {
      item: item,
    })
  }

  const renderItem = ({ item }:{item:Item}) => {
    return (
      <CenterImageItem
        item={item}
        onPress={() => onItemPress(item)}
      />
    )
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          style={styles.listContainer}
          numColumns={2}
          horizontal={false}
          data={itemStore.allItems}
          renderItem={renderItem}
          keyExtractor={(item: Item) => `Item-${item.id}`}
          extraData={selectedId}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: PRODUCT_ITEM_OFFSET,
  },
})
