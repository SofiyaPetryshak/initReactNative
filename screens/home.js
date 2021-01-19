import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

export default function Home({navigation}) {
    return (
        <View>
            <Text>Welome to Home Screen</Text>
            <Button
            title="Go to My Account"
            onPress={() => navigation.navigate('MyAccount')}
            />
        </View>
    )
}