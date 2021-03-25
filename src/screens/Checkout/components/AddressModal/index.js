import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
//Components
import {Address} from '../../../../components'
//Functions

export default ({setAddress}) => {
  const addressFromRedux = useSelector((state) => state.address.data)

  return (
    <View style={styles.mainContainer}>
      {addressFromRedux.map((address, index) => (
        <TouchableOpacity
          onPress={() => setAddress(address)}
          style={styles.addressContainer}
          key={address._id}>
          <Address addressData={address} />
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
  addressContainer: tailwind('my-4 bg-white p-4 light-shadow rounded-xl'),
})
