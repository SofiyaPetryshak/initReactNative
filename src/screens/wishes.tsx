/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack'

import { globalStyles } from '../styles/global'
import { Wish } from '../types/types'
import { WISHES } from '../wishes'

interface WishItemProps {
  item: Wish;
  onPress: (item:Wish) => void;
}

const WishItem = ({ item, onPress }:WishItemProps) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <Card>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={item.images[0]}
        />
        <View>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>

      </View>

    </Card>

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
    return (
      <WishItem
        item={item}
        onPress={() => onWishItemPress(item)}
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
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 150,
    marginRight: 20,
    width: 150,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    maxWidth: 200,
  },
})

export default WishesScreen
