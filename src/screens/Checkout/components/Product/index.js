import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Components
import {Image} from 'react-native-expo-image-cache'
//Functions
import IDRFormat from '../../../../utils/IDRFormat'

export default ({productData}) => {
  const {product, qty} = productData
  const {img, name, price} = product

  return (
    <View style={styles.mainContainer}>
      <Image
        uri={img}
        tint="light"
        preview={{
          uri: product.thumbnailImg
            ? product.thumbnailImg
            : 'https://res.cloudinary.com/dqdhg7qnc/image/upload/c_thumb,w_200,g_face/v1615098170/shonenplays/products/Manga_-_Weekly_Shonen_Jumo_Issue_5_q6enza.png',
        }}
        style={styles.image}
      />
      <View style={tailwind('ml-4 justify-between')}>
        <Text style={tailwind('font-normal font-semibold mb-4')}>{name}</Text>
        <View>
          <Text style={tailwind('font-normal text-dgray text-xs mb-1')}>
            {qty} x Rp{IDRFormat(price)}
          </Text>
          <Text style={tailwind('font-normal font-semibold text-dgray mb-1')}>
            Rp{IDRFormat(qty * price)}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind('flex-row mb-5'),
  image: {
    width: 70,
    height: 90,
    borderRadius: 5,
  },
})
