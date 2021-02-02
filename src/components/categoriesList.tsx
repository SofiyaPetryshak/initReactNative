import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

import { CATEGORIES } from '$src/categories'

interface CategoryItemProps {
  categoryName:string
  onPress:()=> void
}

const renderItem = ({ item }:{ item:string }) => {
  return (
    <CategoryItem
      categoryName={item}
      onPress={() => console.warn(item)}
    />
  )
}

const CategoryItem = ({ categoryName, onPress }:CategoryItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryName}>{categoryName}</Text>
      </View>
    </TouchableOpacity>
  )
}

const CategoriesList = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item:string) => `Category-${item}`}
    />
  )
}
const styles = StyleSheet.create({
  categoryContainer: {
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
})

export default CategoriesList
