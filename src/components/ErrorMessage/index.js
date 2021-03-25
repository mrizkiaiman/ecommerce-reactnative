import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size

export default ({visible, text, customStyles}) => {
  const styles = StyleSheet.create({
    errorText: {
      color: 'red',
      marginLeft: 1,
      marginTop: 5,
      ...customStyles,
    },
  })

  if (!visible || !text) return null
  else return <Text style={styles.errorText}>{text}</Text>
}
