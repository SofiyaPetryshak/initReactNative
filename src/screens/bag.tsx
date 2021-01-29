/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Button, Divider } from 'react-native-elements'
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
        rightActionText='Remove from bag'
      />
    )
  }
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Text>{bagStore.countItemsInBag} item(s): Total <Text>${bagStore.totalAmount.toFixed(2)}</Text></Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={bagStore.getItemsInBag}
          renderItem={renderItem}
          keyExtractor={(item: Item) => `Item-${item.id}`}
          extraData={selectedId}
        />
      </SafeAreaView>
      <View style={styles.bottomButtonsContainer}>
        <View style={styles.bottomButtons}>
          <Button
            title='CHECKOUT'
            buttonStyle={{
              backgroundColor: '#1D8348',
              alignSelf: 'center',
              paddingHorizontal: 15,
            }}
            titleStyle={{ fontWeight: 'bold' }}
          />
          <Button
            title='APPLE PAY'
            buttonStyle={{
              backgroundColor: '#000',
              alignSelf: 'center',
              paddingHorizontal: 15,
            }}
            titleStyle={{ fontWeight: 'bold' }}
          />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  bottomButtons: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  bottomButtonsContainer: {
    bottom: 0,
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#D3D3D3',
    paddingVertical: 15,
  },
})
export default observer(BagScreen)
