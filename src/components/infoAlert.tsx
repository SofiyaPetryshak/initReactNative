import React, { useState } from 'react'
import {
  Alert,
} from 'react-native'

// const [modalVisible, setModalVisible] = useState(false)
const createInfoAlert = (message:string) =>
  Alert.alert(
    'Hey!',
    `${message}`,
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false },
  )

export default createInfoAlert
