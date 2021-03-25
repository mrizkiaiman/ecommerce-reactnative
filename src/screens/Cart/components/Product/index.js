import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useDispatch} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Components
import {Image} from 'react-native-expo-image-cache'
import {QtyControl} from '../../../../components'
//Functions
import {Toast, IDRFormat} from '../../../../utils'
import {removeFromCart_API} from '../../../../services/cart'
import {updateCart_redux} from '../../../../store/actions/cart'

export default ({productData}) => {
  const {product, qty} = productData
  const {img, name, price, _id} = product
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const removeFromCart_APIOnSubmit = () => {
    Alert.alert(
      'Remove',
      'Are you sure you want to remove this item?',
      [
        {text: 'Cancel'},
        {
          text: 'OK',
          onPress: async () => {
            const updatedCart = await removeFromCart_API(_id)
            dispatch(updateCart_redux(updatedCart.data))
            Toast({
              title: 'Success',
              text: 'Item has been removed from the cart',
            })
          },
        },
      ],
      {cancelable: false},
    )
  }

  const navigateToProductDetails = () => {
    navigation.navigate('ProductDetails', {product: productData})
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={navigateToProductDetails}>
        <Image
          style={styles.productImage}
          uri={img}
          tint="light"
          preview={{
            uri: product.thumbnailImg
              ? product.thumbnailImg
              : 'https://res.cloudinary.com/dqdhg7qnc/image/upload/c_thumb,w_200,g_face/v1615098170/shonenplays/products/Manga_-_Weekly_Shonen_Jumo_Issue_5_q6enza.png',
          }}
        />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text numberOfLines={2} style={styles.productNameText}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.productPriceText}>
          Rp{IDRFormat(Number(price))}
        </Text>
        <View style={{marginStart: width > 410 ? -55 : -25, marginTop: 45}}>
          <QtyControl
            value={qty}
            customControlContainerStyle={{
              width: 40,
              height: 40,
              ...tailwind('mx-5'),
            }}
            customValueTextStyle={tailwind('font-semibold text-lg mt-1')}
            customIconSize={20}
            product={productData}
          />
        </View>
      </View>
      <TouchableOpacity onPress={removeFromCart_APIOnSubmit}>
        <Ionicons
          style={{marginTop: -2}}
          name="ios-close"
          size={25}
          color="#777777"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: width * 0.9,
    ...tailwind('bg-white rounded-xl p-4 flex-row light-shadow mb-5'),
  },
  contentContainer: tailwind('px-5 pt-1'),
  productImage: {
    height: 150,
    width: 115,
    ...tailwind('rounded-xl'),
  },
  productNameText: {
    ...tailwind('font-normal font-semibold mb-3'),
    width: width > 410 ? 170 : 140,
  },
  productPriceText: tailwind('font-normal font-semibold text-dgray'),
})
