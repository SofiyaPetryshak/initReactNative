import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'

import ScreenHeader from '../components/screenHeader'
import BagScreen from '../screens/bag'
import HomeScreen from '../screens/home'
import MyAccountScreen from '../screens/myAccount'
import Sales from '../screens/sales'
import SearchScreen from '../screens/search'
import WishesScreen from '../screens/wishes'

const Tab = createBottomTabNavigator()

enum RouteName {
  HOME_SCREEN = 'HomeScreen',
  SEARCH_SCREEN = 'SearchScreen',
  BAG_SCREEN = 'BagScreen',
  WISHES_SCREEN = 'WishesScreen',
  MY_ACCOUNT_SCREEN = 'MyAccountScreen'
}

type IconName =
'home' |
'home-outline' |
'search' |
'search-outline' |
'basket' |
'basket-outline' |
'heart' |
'heart-outline' |
'person' |
'person-outline'
;

const getIconName = (focused: boolean, route: RouteName): IconName => {
  switch (route) {
    case RouteName.HOME_SCREEN:
      return focused ? 'home' : 'home-outline'
    case RouteName.SEARCH_SCREEN:
      return focused ? 'search' : 'search-outline'
    case RouteName.BAG_SCREEN:
      return focused ? 'basket' : 'basket-outline'
    case RouteName.WISHES_SCREEN:
      return focused ? 'heart' : 'heart-outline'
    case RouteName.MY_ACCOUNT_SCREEN:
      return focused ? 'person' : 'person-outline'
  }
}

const HomeStack = createStackNavigator()

function HomeStackScreen () {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen} />
      <HomeStack.Screen name='Sales' component={Sales} />
    </HomeStack.Navigator>
  )
}
const SearchStack = createStackNavigator()

function SearchStackScreen () {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name='Search' component={SearchScreen} />
    </SearchStack.Navigator>
  )
}

const BagStack = createStackNavigator()

function BagStackScreen () {
  return (
    <BagStack.Navigator>
      <BagStack.Screen name='My bag' component={BagScreen} />
    </BagStack.Navigator>
  )
}

const WishesStack = createStackNavigator()

function WishesStackScreen () {
  return (
    <WishesStack.Navigator>
      <WishesStack.Screen name='Wishes' component={WishesScreen} />
    </WishesStack.Navigator>
  )
}

const MyAccountStack = createStackNavigator()

function MyAccountStackScreen () {
  return (
    <MyAccountStack.Navigator>
      <MyAccountStack.Screen name='My Account' component={MyAccountScreen} />
    </MyAccountStack.Navigator>
  )
}

// const myOptions: object = {
//   headerStyle: {
//     backgroundColor: 'tomato',
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// }

export default function BottomNavigation () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: function Icon ({ focused, color, size }: {focused: boolean, color: string, size: number}) {
          const iconName = getIconName(focused, route.name as RouteName)

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}

    >
      <Tab.Screen name='HomeScreen' component={HomeStackScreen} />
      <Tab.Screen name='SearchScreen' component={SearchStackScreen} />
      <Tab.Screen name='BagScreen' component={BagStackScreen} />
      <Tab.Screen name='WishesScreen' component={WishesStackScreen} />
      <Tab.Screen name='MyAccountScreen' component={MyAccountStackScreen} />
    </Tab.Navigator>
  )
}
