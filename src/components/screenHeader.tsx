import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'

interface Props {
  screenName: string;
}

const ScreenHeader: React.FC<Props> = ({ screenName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{screenName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 60,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

})

export default ScreenHeader
