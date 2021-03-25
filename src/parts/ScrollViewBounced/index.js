import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions

export default ({color}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: color,
      height: height,
      position: 'absolute',
      top: -height,
      left: 0,
      right: 0,
    },
  })

  return <View style={styles.mainContainer} />
}
