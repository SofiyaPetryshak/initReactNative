/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { observer } from 'mobx-react'
import { Ionicons } from '@expo/vector-icons'

import { itemStore } from '../stores/index'

import CategoriesList from '$src/components/categoriesList'
import SideImageItem from '$src/components/sideImageItem'
import CustomSwitcher from '$src/components/switcher'
import { Item } from '$src/types/types'

type SearchStackParamList = {
  Item: { item: Item }
};

type SearchScreenNavigationProp = StackNavigationProp<SearchStackParamList, 'Item'>;

type Props = {
  navigation: SearchScreenNavigationProp;
}

function SearchScreen ({ navigation }:Props) {
  const [input, setInput] = React.useState('')
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
        rightActionText='Remove from wishes'
        onSwipeFromRight={() => itemStore.removeFromLiked(item.id)}
      />
    )
  }
  const RenderCategoriesScreen = () => {
    return (
      <View>
        <CustomSwitcher />
        <CategoriesList />
      </View>
    )
  }
  const handleTextChange = (text:string) => {
    setInput(text)
    if (input.length > 1) {
      itemStore.filterItems(input)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchbar}>
        <TextInput
          textAlign='center'
          style={styles.searchInput}
          onChangeText={text => handleTextChange(text)}
          value={input}
          defaultValue={input}
          placeholder='Search'
        />
        <Ionicons name='search' size={23} />
      </View>
      {
        (itemStore.filtered.length && input)
          ? <FlatList
              data={itemStore.filtered}
              renderItem={renderItem}
              keyExtractor={(item: Item) => `Wish-${item.id}`}
              extraData={selectedId}
          />
          : <RenderCategoriesScreen />
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchInput: {
    alignSelf: 'center',
    backgroundColor: '#E5E7E9',
    borderRadius: 90,
    height: 40,
    width: '85%',
  },
  searchbar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
})

export default observer(SearchScreen)
