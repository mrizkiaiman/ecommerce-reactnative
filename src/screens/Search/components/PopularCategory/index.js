import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
//Styling
import {tailwind} from '../../../../style/tailwind'

export default ({category}) => {
  const navigation = useNavigation()
  const navigateToProducts = () => {
    navigation.navigate('Products', {
      categoryId: category._id,
      categoryName: category.name,
    })
  }
  return (
    <TouchableOpacity onPress={navigateToProducts} style={styles.mainContainer}>
      <Image style={styles.image} source={{uri: category.popularIcon}} />
      <Text style={styles.nameText}>{category.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    ...tailwind(
      'justify-center items-center bg-white rounded-lg my-1 mr-5 light-shadow',
    ),
    width: 100,
    height: 130,
  },
  image: {
    width: 70,
    height: 90,
    marginVertical: 8,
    resizeMode: 'contain',
  },
  nameText: tailwind('font-H2 text-sm pb-2'),
})
