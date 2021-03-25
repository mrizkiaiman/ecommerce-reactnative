import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
//Styling
import {tailwind} from '../../style/tailwind'
//Components
import {SvgUri} from 'react-native-svg'

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
      <View style={styles.iconContainer}>
        <SvgUri width={50} height={50} uri={category.icon} />
      </View>
      <Text style={styles.nameText}>{category.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 140,
    ...tailwind('justify-center items-center m-1'),
  },
  iconContainer: {
    ...tailwind(
      'justify-center items-center bg-white light-shadow rounded-lg mb-2',
    ),
    height: 90,
    width: 90,
  },
  nameText: tailwind('font-normal font-semibold text-center text-xs'),
})

// _id,
// name,
// isPopular,
// icon
