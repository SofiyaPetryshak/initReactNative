import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '$src/screens/home'
import Sales from '$src/screens/sales'

const Stack = createStackNavigator()
export default function Navigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='Sales' component={Sales} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
