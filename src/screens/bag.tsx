/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack'
import { observer } from 'mobx-react'

import { bagStore } from '../stores/index'
import { globalStyles } from '../styles/global'

import SideImageItem from '$src/components/sideImageItem'
import { Item } from '$src/types/types'

type ItemsStackParamList = {
  Item: { item: Item }
};

type ItemsScreenNavigationProp = StackNavigationProp<ItemsStackParamList, 'Item'>;

type Props = {
  navigation: ItemsScreenNavigationProp;
}

const BagScreen = ({ navigation }: Props) => {
  const [selectedId, setSelectedId] = useState(0)

  const onItemPress = (item: Item) => {
    setSelectedId(item.id)
    navigation.navigate('Item', {
      item: item,
    })
  }

  const renderItem = ({ item }:{item:Item}) => {
    return (
      <SideImageItem
        item={item}
        onPress={() => onItemPress(item)}
        onSwipeFromRight={() => bagStore.removeFromBag(item)}
      />
    )
  }
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Text>{bagStore.countItemsInBag} item(s): Total <Text>${bagStore.totalAmount.toFixed(2)}</Text></Text>
      </View>
      <View>
        <SafeAreaView>
          <FlatList
            data={bagStore.getItemsInBag}
            renderItem={renderItem}
            keyExtractor={(item: Item) => `Item-${item.id}`}
            extraData={selectedId}
          />
        </SafeAreaView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#D3D3D3',
    paddingVertical: 15,
  },
})
export default observer(BagScreen)
