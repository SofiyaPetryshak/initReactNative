/* eslint-disable react-native/no-color-literals */
import React, { useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from 'react-native'

import { Wish } from '../types/types'

const { width } = Dimensions.get('window')
const height = width

function Slider ({ images }: {images:ImageSourcePropType[]}) {
  const [shownImage, setShownImage] = useState(0)

  const onImageChange = (event : NativeSyntheticEvent<NativeScrollEvent>):void => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width)
    if (slide !== shownImage) {
      setShownImage(slide)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={onImageChange}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {
          images.map((image:ImageSourcePropType, id:number) => (
            <Image
              key={id}
              source={image}
              style={styles.image}
            />
          ))
        }
      </ScrollView>
      <View style={styles.pagination}>
        {
          images.map((i:ImageSourcePropType, k:number) => (
            <Text key={k} style={k === shownImage ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
  image: {
    height,
    resizeMode: 'cover',
    width,
  },
  pagination: {
    alignSelf: 'center',
    bottom: 0,
    flexDirection: 'row',
    position: 'absolute',
  },
  pagingActiveText: {
    color: '#fff',
    fontSize: (width / 30),
    margin: 3,
  },
  pagingText: {
    color: '#D3D3D3',
    fontSize: (width / 30),
    margin: 3,
    opacity: 0.8,
  },
  scroll: {
    height,
    width,
  },

})

export default Slider
