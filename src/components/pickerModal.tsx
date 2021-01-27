/* eslint-disable react-native/no-color-literals */
import React, { useEffect, useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'

type Props = {
  visible: boolean;
  items: string[];
  title: string;
  onClose: () => void;
  onSelect: (value:string) => void;
  value?:string;
}

const PickerModal: React.FC<Props> = ({
  visible,
  items,
  title,
  onClose,
  onSelect,
  value,
}) => {
  const [pickerValue, setPickerValue] = useState<string>('')

  useEffect(() => {
    if (value) {
      setPickerValue(value)
    }
  }, [value])

  return (
    <Modal animated transparent visible={visible} animationType='fade'>
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons size={30} name='close' />
            </TouchableOpacity>
            <Text>{title || 'Placeholder'}</Text>
            <TouchableOpacity onPress={() => onSelect(pickerValue)}>
              <Ionicons size={30} name='checkmark' />
            </TouchableOpacity>

          </View>
          <Picker selectedValue={pickerValue} onValueChange={(value) => { setPickerValue(value.toString()) }}>
            {items.map(item => <Picker.Item key={items.indexOf(item)} value={item} label={item} />)}
          </Picker>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  pickerContainer: {
    backgroundColor: 'white',
    height: 200,
    width: '100%',
  },
})

export default PickerModal
