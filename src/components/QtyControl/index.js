import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux'
import {Feather} from '@expo/vector-icons'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
//Components
//Functions
import {removeFromCart_API, updateQtyProduct_API} from '../../services/cart'
import {updateCart_redux} from '../../store/actions/cart'

export default ({
  value,
  setValue,
  customControlContainerStyle,
  customValueTextStyle,
  customIconSize,
  product: {product, _id, qty},
}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      ...tailwind('flex-row items-center justify-center'),
    },
    controlContainer: {
      width: 70,
      height: 60,
      ...tailwind(
        'bg-white light-shadow rounded-xl justify-center items-center mx-10',
      ),
      ...customControlContainerStyle,
    },
    valueText: {
      ...tailwind('font-semibold text-xl mt-1'),
      ...customValueTextStyle,
    },
  })
  const dispatch = useDispatch()
  const changeValue = async (action) => {
    if (action === '+') {
      const updatedCart = await updateQtyProduct_API(product._id, action)
      dispatch(updateCart_redux(updatedCart.data))
    } else {
      if (value !== 1) {
        const updatedCart = await updateQtyProduct_API(product._id, action)
        dispatch(updateCart_redux(updatedCart.data))
      }
    }
  }

  return (
    <View style={styles.mainContainer}>
      {/* <TouchableOpacity
        onPress={() => changeValue('-')}
        style={styles.controlContainer}>
        <Feather
          name="minus"
          size={customIconSize ? customIconSize : 32}
          color="#006266"
        />
      </TouchableOpacity>
      <Text style={styles.valueText}>{value}</Text>
      <TouchableOpacity
        onPress={() => changeValue('+')}
        style={styles.controlContainer}>
        <Feather
          name="plus"
          size={customIconSize ? customIconSize : 32}
          color="#006266"
        />
      </TouchableOpacity> */}
    </View>
  )
}
