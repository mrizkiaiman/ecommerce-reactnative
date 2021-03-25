import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
import RightIcon from '../../../../assets/icons/rightDirection.svg'

export default ({menu}) => {
  const {name, icon, screen, customOnSubmit} = menu
  const navigation = useNavigation()
  const navigateToScreen = () => {
    navigation.navigate(screen)
  }
  return (
    <TouchableOpacity
      onPress={customOnSubmit ? customOnSubmit : navigateToScreen}
      style={styles.mainContainer}>
      <View style={styles.nameAndIconContainer}>
        {icon}
        <Text style={styles.menuNameText}>{name}</Text>
      </View>
      <RightIcon />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    ...tailwind('bg-white px-5 flex-row justify-between items-center py-4'),
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  nameAndIconContainer: tailwind('flex-row items-center'),
  menuNameText: tailwind('font-normal ml-4'),
})
