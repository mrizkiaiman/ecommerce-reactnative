import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
import CheckedIcon from '../../assets/icons/circle-check.svg'
//Components
//Functions

export default ({onSubmit, customStyle, checkedValue, value}) => {
  return (
    <TouchableOpacity style={customStyle} onPress={onSubmit}>
      <Text style={styles.listText}>{value}</Text>
      {value === checkedValue ? (
        <CheckedIcon style={{marginRight: 16, marginBottom: 4}} />
      ) : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
  listText: {
    ...tailwind('font-normal'),
    marginVertical: 14,
    marginStart: 16,
  },
})
