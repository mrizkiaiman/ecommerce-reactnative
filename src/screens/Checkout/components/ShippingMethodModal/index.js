import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Shipping} from '../../../../mockdata'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions
import {IDRFormat} from '../../../../utils'

export default ({setShippingMethod}) => {
  return (
    <View style={styles.mainContainer}>
      {Shipping.map((shipping, index) => (
        <TouchableOpacity
          onPress={() => setShippingMethod(shipping)}
          style={styles.shippingMethodContainer}
          key={shipping.name}>
          <Text
            style={tailwind(
              'font-normal font-semibold text-dgray text-lg mb-2',
            )}>
            {shipping.name}
          </Text>
          <Text style={tailwind('font-normal font-semibold')}>
            Rp{IDRFormat(shipping.cost)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F8F9FA',
    height,
    paddingHorizontal: 16,
  },
  shippingMethodContainer: tailwind('my-3 bg-white p-4 light-shadow rounded'),
})
