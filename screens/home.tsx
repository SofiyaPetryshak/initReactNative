import React from 'react'
import { View, Text, Button } from 'react-native'
import {globalStyles} from '../styles/global'

export default function HomeScreen ({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text>Home Screen</Text>
         <Button
         title="Go to My Account"
         onPress={() => navigation.navigate('Sales')}/>
         </View>
    )
}