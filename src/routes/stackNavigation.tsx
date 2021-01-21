import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/home'
import Sales from '../screens/sales'

const HomeStack = createStackNavigator()

function HomeStackScreen () {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen} />
      <HomeStack.Screen name='Sales' component={Sales} />
    </HomeStack.Navigator>
  )
}

export { HomeStackScreen }