import React from 'react'
import { Button, Text, View } from 'react-native'

import { globalStyles } from '../styles/global'

export default function HomeScreen ({ navigation }: { navigation: any }) {
  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
      <Button
        title='Go to My Account'
        onPress={() => navigation.navigate('Sales')}
      />
    </View>
  )
}
