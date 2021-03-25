import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
//Components
import Button from '../../components/Button'
//Functions

export default ({styling, title, onSubmit}) => {
  return (
    <View style={styles.mainContainer}>
      <Button onSubmit={onSubmit} styling={styling} title={title} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind('bg-white pb-7 pt-5 justify-center items-center'),
})
