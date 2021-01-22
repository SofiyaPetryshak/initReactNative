/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Button, Card, Icon, ListItem } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack'

import ScreenHeader from '../components/screenHeader'
import { globalStyles } from '../styles/global'
import { WISHES } from '../wishes'

interface Wish {
  id:number;
  title: string;
  brand: string;
  price: string;
  description: string;
  image: string;
}

interface WishItemProps {
  item: Wish;
  onPress: (item:Wish) => void;
}

const WishItem = ({ item, onPress }:WishItemProps) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <Card>
      <Card.Title>{item.title}</Card.Title>
      <Card.Divider />
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../assets/bag.jpeg')}
        />
        <View>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.description}>{item.description}</Text>
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
  description: {
    fontSize: 15,
    maxWidth: 200,
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
})

export default WishesScreen
