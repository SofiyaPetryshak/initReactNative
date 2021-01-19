import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import MyAccount from '../screens/myAccount'

const Stack = createStackNavigator()
export default function Navigator(){
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}


