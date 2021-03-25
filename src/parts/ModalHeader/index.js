import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions

export default ({cancelMethod, saveMethod, title}) => {
  return (
    <View style={tailwind('flex-row justify-between m-4 py-2 bg-white')}>
      <Text onPress={cancelMethod} style={tailwind('font-normal text-dgray')}>
        Cancel
      </Text>
      <Text style={tailwind('font-normal font-semibold')}>{title}</Text>
      {saveMethod && (
        <Text onPress={saveMethod} style={tailwind('font-functional')}>
          Save
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
