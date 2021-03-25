import React from 'react'
import {TouchableOpacity, StyleSheet, TextInput, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
//Styling
import {tailwind} from '../../../../style/tailwind'

export default function SearchBar() {
  const styles = StyleSheet.create({
    mainContainer: {
      ...tailwind('w-full flex-row rounded p-4'),
      // width: width * 0.9,
      backgroundColor: '#038287',
      opacity: 0.8,
      marginTop: 24,
    },
    textInput: {
      color: 'white',
      marginStart: 10,
    },
  })

  const navigation = useNavigation()
  const navigateToSearch = () => {
    navigation.navigate('Search')
  }

  return (
    <TouchableOpacity onPress={navigateToSearch} style={styles.mainContainer}>
      <Text style={{color: 'white', marginLeft: 10}}>Search</Text>
    </TouchableOpacity>
  )
}
