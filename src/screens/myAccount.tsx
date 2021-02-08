import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { itemStore } from '../stores/index'
import { globalStyles } from '../styles/global'

export default function MyAccountScreen () {
  useEffect(() => {
    itemStore.initialize()
  }, [])
  return (
    <View style={globalStyles.container}>
      <Text onPress={() => console.warn(itemStore.items)}>Search Screen</Text>
    </View>
  )
}
