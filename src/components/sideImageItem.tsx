import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card } from 'react-native-elements'
import { Item } from '../types/types'
import Swipeable from 'react-native-gesture-handler/Swipeable';


interface ItemProps {
  item: Item
  onPress: (item:Item) => void
  onSwipeFromRight?: (item:Item) => void
}

const RightAction=()=>{
return <View style={styles.rightAction}>
  <Text style={styles.actionText}>Remove from bag</Text>
</View>
}

const SideImageItem = ({ item, onPress,onSwipeFromRight }:ItemProps) => (
  <Swipeable renderRightActions={RightAction}>
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
const styles = StyleSheet.create({
  actionText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  card:{
    width: '100%',
    margin:0,
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
  title: {
    fontSize: 15,
    maxWidth: 200,
  },
  rightAction: {
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  }
})

export default SideImageItem
