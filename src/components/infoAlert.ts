import {
  Alert,
} from 'react-native'

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
