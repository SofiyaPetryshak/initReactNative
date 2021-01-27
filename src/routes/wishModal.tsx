/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import PickerModal from '../components/pickerModal'
import Slider from '../components/slider'
import { Wish } from '../types/types'

const SIZES = ['s', 'm', 'l']

type WishStackParamList = {
  Wish: { item: Wish }
};

type WishScreenNavigationProp = StackNavigationProp<WishStackParamList, 'Wish'>;
type WishScreenRouteProp = RouteProp<WishStackParamList, 'Wish'>;

type Props = {
  navigation: WishScreenNavigationProp;
  route: WishScreenRouteProp;
};

function WishModalScreen ({ route, navigation }:Props) {
  const { item } = route.params

  const [showPicker, setShowPicker] = useState<string>('')
  const [size, setSize] = useState<string>('')

  const handleChange = (value: string) => {
    setSize(value)
  }
  return (
    <View style={styles.container}>
      <Ionicons style={{ marginLeft: 20 }} name='close' size={30} onPress={() => navigation.goBack()} />
      <Slider images={item.images} />
      <View style={styles.priceSection}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Ionicons
          name='heart'
          size={30}
          color='#EE4622'
        />
      </View>
      <Divider style={styles.divider} />
      <Text style={styles.itemName}>{item.title}</Text>
      <Divider style={styles.divider} />
      <View style={styles.colorAndPicker}>
        <Text style={styles.colorText}>{item.color}</Text>
        <Button
          title='SIZE'
          type='clear'
          onPress={() => setShowPicker('size')}
        />
        <PickerModal
          items={SIZES}
          title={showPicker}
          visible={Boolean(showPicker)}
          onClose={() => {
            setShowPicker('')
            console.log('close')
          }}
          onSelect={(value) => handleChange(value)}
          value={showPicker ? size : ''}
        />
      </View>
      <Divider style={styles.divider} />
      <Button
        buttonStyle={{
          backgroundColor: '#1D8348',
          width: '80%',
          alignSelf: 'center',
          marginTop: 30,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        title='ADD TO BAG'
        onPress={() => { console.log('added to bag') }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  colorAndPicker: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  colorText: {
    fontSize: 18,
  },
  container: {
    paddingTop: 30,

  },
  divider: {
    alignSelf: 'center',
    backgroundColor: '#D3D3D3',
    height: 2,
    width: '90%',
  },
  itemName: {
    fontSize: 18,
    marginVertical: 25,
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
})
export default WishModalScreen
