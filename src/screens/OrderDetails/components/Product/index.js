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
  const {qty, product} = productData
  const {img, name, price} = product

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
      <View style={tailwind('justify-between ml-4')}>
        <Text style={tailwind('font-normal font-semibold')}>{name}</Text>
        <View>
          <Text style={tailwind('font-normal text-sm text-dgray mb-1')}>
            {qty} Item
          </Text>
          <Text style={tailwind('font-normal font-semibold')}>
            Rp{IDRFormat(price)}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind('flex-row mb-6'),
  image: {
    width: 70,
    height: 90,
    borderRadius: 5,
  },
})
