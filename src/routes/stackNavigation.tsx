import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomNavigation from './tabNavigation'
import WishModalScreen from './wishModal'

const RootStack = createStackNavigator()
function RootStackScreen () {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode='modal'>
        <RootStack.Screen
          name='Main'
          component={BottomNavigation}
          options={{
            headerShown: false,
            headerTitle: 'Wishes',
          }}
        />
        <RootStack.Screen
          name='Wish'
          component={WishModalScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootStackScreen
