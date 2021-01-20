import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home'
import SearchScreen from '../screens/search'
import BagScreen from '../screens/bag'
import WishesScreen from '../screens/wishes'
import MyAccountScreen from '../screens/myAccount'

const Tab = createBottomTabNavigator()

export default function BottomNavigation() {
    return (
       <NavigationContainer>
           <Tab.Navigator 
           screenOptions = {({route}) => ({
               tabBarIcon: ({ focused, color, size }) => {
                   let iconName;

                   if(route.name === 'HomeScreen') {
                       iconName = focused ? 'home' : 'home-outline'
                   } else if (route.name === 'SearchScreen') {
                    iconName = focused ? 'search' : 'search-outline'
                   }else if (route.name === 'BagScreen') {
                    iconName = focused ? 'cart' : 'cart-outline'
                   }
                   else if (route.name === 'WishesScreen') {
                    iconName = focused ? 'heart' : 'heart-outline'
                   }
                   else if (route.name === 'MyAccountScreen') {
                    iconName = focused ? 'person' : 'person-outline'
                   }

                   return <Ionicons name={iconName} size={size} color={color} />
                },
           })}
           tabBarOptions = {{
               activeTintColor: 'tomato',
               inactiveTintColor: 'gray'
           }}
           >
               <Tab.Screen name='HomeScreen' component={HomeScreen}/>
               <Tab.Screen name='SearchScreen' component={SearchScreen}/>
               <Tab.Screen name='BagScreen' component={BagScreen}/>
               <Tab.Screen name='WishesScreen' component={WishesScreen}/>
               <Tab.Screen name='MyAccountScreen' component={MyAccountScreen}/>
           </Tab.Navigator>
       </NavigationContainer>
    )
}