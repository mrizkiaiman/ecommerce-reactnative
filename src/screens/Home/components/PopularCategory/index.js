import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Image} from 'react-native-expo-image-cache'
//Styling
import {tailwind} from '../../../../style/tailwind'

export default ({category}) => {
  const navigation = useNavigation()
  const navigateToProducts = () => {
    navigation.navigate('Products', {categoryId: category._id})
  }
  return (
    <TouchableOpacity onPress={navigateToProducts} style={styles.mainContainer}>
      <Image
        style={styles.image}
        uri={category.popularIcon}
        tint="light"
        resizeMode="contain"
        preview={{uri: category.thumbnailPopular}}
      />
      <Text style={styles.nameText}>{category.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    ...tailwind(
      'justify-center items-center bg-white rounded-lg my-1 mr-5 light-shadow',
    ),
    width: 130,
    height: 200,
  },
  image: {
    width: 110,
    height: 130,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  nameText: tailwind('font-H2 text-sm pb-2'),
})
