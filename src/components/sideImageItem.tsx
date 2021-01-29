import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card } from 'react-native-elements'
import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { Item } from '../types/types'

interface ItemProps {
  item: Item
  onPress: (item:Item) => void
  onSwipeFromRight: (id:number) => void
  rightActionText:string
}

const SideImageItem = ({ item, onPress, onSwipeFromRight, rightActionText }:ItemProps) => {
  const renderRightActions = () => (
    <RectButton style={styles.rightAction} onPress={() => onSwipeFromRight(item.id)}>
      <Text style={styles.actionText}>{rightActionText}</Text>
    </RectButton>
  )

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={() => onPress(item)}>
        <Card containerStyle={styles.card}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              resizeMode='cover'
              source={item.images[0]}
            />
            <View>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  actionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    margin: 0,
    width: '100%',
  },
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
  rightAction: {
    alignItems: 'center',
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    maxWidth: 200,
  },
})

export default SideImageItem
