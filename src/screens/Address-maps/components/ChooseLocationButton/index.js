import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native'
//Styling
import {tailwind} from '../../../../style/tailwind'

const styles = StyleSheet.create({
  button: {
    width: 200,
    borderRadius: 5,
    backgroundColor: '#006266',
    position: 'absolute',
    marginTop: 80,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
  icon: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 0,
    alignSelf: 'center',
  },
  buttonText: tailwind('font-normal font-semibold text-white text-center'),
})

function ChooseLocationButton({name, navigate}) {
  return (
    <TouchableOpacity style={styles.button} onPress={navigate}>
      <Text style={styles.buttonText}>Choose this location</Text>
    </TouchableOpacity>
  )
}

export default ChooseLocationButton
