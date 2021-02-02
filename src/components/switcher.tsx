/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const windowWidth = Dimensions.get('window').width

function CustomSwitcher () {
  const [isWoman, setIsWoman] = useState<boolean>(true)

  const styles = StyleSheet.create({
    switchContainer: {
      height: 60,
    },
    switchOptions: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-around',
    },
    switchText: {
      fontSize: 16,
    },
    toggle: {
      left: isWoman ? 0 : windowWidth / 2,
    },
    underline: {
      backgroundColor: '#3789DA',
      height: 2,
      width: '50%',
    },
  })

  return (
    <View style={styles.switchContainer}>
      <View style={styles.switchOptions}>
        <Text style={styles.switchText} onPress={() => setIsWoman(true)}>Woman</Text>
        <Text style={styles.switchText} onPress={() => { setIsWoman(false) }}>Man</Text>
      </View>
      <View style={styles.toggle}>
        <View style={styles.underline} />
      </View>
    </View>
  )
}
export default CustomSwitcher
