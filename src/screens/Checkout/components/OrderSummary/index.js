import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions
import IDRFormat from '../../../../utils/IDRFormat'

export default ({costData: {shipping, total, discount}}) => {
  const costList = [
    {
      title: 'Subtotal',
      value: total ? total : 0,
    },
    {
      title: 'Shipping',
      value: shipping ? shipping : 0,
    },
    {
      title: 'Discount',
      value: discount ? discount : 0,
    },
  ]

  const CostData = ({title, value}) => (
    <View style={tailwind('flex-row justify-between mb-4')}>
      <Text style={tailwind('font-normal font-semibold')}>{title}</Text>
      <Text style={tailwind('font-normal font-semibold text-dgray')}>
        Rp{IDRFormat(value)}
      </Text>
    </View>
  )

  return (
    <View style={styles.mainContainer}>
      {costList.map((cost, index) => (
        <CostData key={cost.title} {...cost} />
      ))}
      <View style={tailwind('flex-row justify-between mt-2')}>
        <Text style={tailwind('font-normal font-semibold text-xl')}>Total</Text>
        <Text style={tailwind('font-normal font-semibold text-dgray text-xl')}>
          Rp{IDRFormat(total + shipping - discount)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
