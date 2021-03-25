import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import {useDispatch} from 'react-redux'
//Styling
import {Size, Buttons} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height, responsiveSize} = Size
const {ip7, ipx} = responsiveSize
//Assets
import TrashIcon from '../../../../assets/icons/trash.svg'
//Components
import {Image} from 'react-native-expo-image-cache'
//Functions
import {IDRFormat} from '../../../../utils'
import {addProduct} from '../../../../store/actions/checkout'
import {removeWishlist} from '../../../../store/actions/wishlist'
import {Toast} from '../../../../utils'
import {addToCart_API} from '../../../../services/cart'
import {updateCart_redux} from '../../../../store/actions/cart'

export default ({product}) => {
  const {name, img, price, _id} = product
  const dispatch = useDispatch()

  const addToCart = async () => {
    const {data} = await addToCart_API({
      productId: _id,
      qty: 1,
      price: price,
    })
    dispatch(updateCart_redux(data))
    Toast({title: 'Success', text: 'Added to cart!'})
  }

  const removeItem = () => {
    Alert.alert(
      'Remove',
      'Are you sure you want to remove this item?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(removeWishlist(product))
            Toast({
              title: 'Success',
              text: 'Item has been removed from the wishlist!',
            })
          },
        },
      ],
      {cancelable: false},
    )
  }

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.image}
        uri={img}
        tint="light"
        preview={{
          uri: product.thumbnailImg
            ? product.thumbnailImg
            : 'https://res.cloudinary.com/dqdhg7qnc/image/upload/c_thumb,w_200,g_face/v1615098170/shonenplays/products/Manga_-_Weekly_Shonen_Jumo_Issue_5_q6enza.png',
        }}
      />
      <View style={{...tailwind('ml-4 justify-between')}}>
        <View>
          <Text style={styles.productNameText}>{name}</Text>
          <Text style={tailwind('font-normal font-semibold text-dgray')}>
            Rp{IDRFormat(price)}
          </Text>
          <View style={tailwind('flex-row items-center mt-7')}>
            <TouchableOpacity onPress={removeItem} style={styles.deleteButton}>
              <TrashIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={addToCart}
              style={styles.addToCart_APIButton}>
              <Text style={tailwind('font-normal font-semibold text-white')}>
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:
    width > ipx.width
      ? tailwind('flex-row bg-white p-4 rounded-lg light-shadow mb-5')
      : tailwind('flex-row bg-white p-4 rounded-lg light-shadow mb-5'),
  image: {
    width: 100,
    height: 130,
    borderRadius: 5,
  },
  addToCart_APIButton: {
    ...tailwind('bg-dgreen flex-row items-center justify-center rounded'),
    height: 40,
    paddingHorizontal: width > ip7.width ? 35 : 28,
  },
  productNameText:
    width > ip7.width
      ? tailwind('font-normal font-semibold mb-2 w-10/12')
      : tailwind('font-normal font-semibold mb-2 w-9/12'),
  deleteButton: {
    ...Buttons.whiteBorderedSubmitButton,
    height: 40,
    width: 40,
    marginRight: 12,
  },
})
