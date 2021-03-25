import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions

export default ({addressData}) => {
  const {name, address, city, province, postalCode, pic, phone} = addressData

  return (
    <View style={styles.mainContainer}>
      <Text style={tailwind('font-normal font-semibold mb-2')}>{name}</Text>
      <Text style={tailwind('font-normal text-sm mb-3')}>
        {address}, {city}, {province} {postalCode}
      </Text>
      <Text style={tailwind('font-normal font-semibold text-dgray mb-2')}>
        {pic}
      </Text>
      <Text style={tailwind('font-normal font-semibold text-dgray')}>
        {phone}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
