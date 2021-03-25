import React, {useState} from 'react'
import {StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
import SearchIcon from '../../assets/icons/search-gray.svg'

export default ({
  searchKeyword,
  setSearchKeyword,
  onSubmit,
  customStyles,
  disabled,
}) => {
  const styles = StyleSheet.create({
    mainContainer: {
      ...tailwind('bg-white h-10 flex-row items-center self-center mt-3'),
      width: width * 0.88,
      borderRadius: 10,
      ...customStyles,
    },
  })
  const navigation = useNavigation()
  const navigateToSearch = () => {
    navigation.navigate('Search')
  }

  return disabled ? (
    <TouchableOpacity onPress={navigateToSearch} style={styles.mainContainer}>
      <SearchIcon style={{marginHorizontal: 15}} />
      <Text style={{color: '#B4B4B4'}}>Search</Text>
    </TouchableOpacity>
  ) : (
    <View style={styles.mainContainer}>
      <SearchIcon style={{marginHorizontal: 15}} />
      <TextInput
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        placeholder="Search"
        autoCapitalize="none"
        onSubmitEditing={onSubmit ? () => onSubmit() : null}
      />
    </View>
  )
}
